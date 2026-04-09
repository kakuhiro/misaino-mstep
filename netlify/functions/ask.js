exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { subject } = JSON.parse(event.body);

    const subjectPrompts = {
      math:    "5th grade Michigan M-STEP Mathematics",
      science: "5th grade Michigan M-STEP Science (ecosystems, matter/energy, Earth science)",
      social:  "5th grade Michigan M-STEP Social Studies (US history, Michigan geography, civics, economics)",
    };

    const prompt = `Generate a ${subjectPrompts[subject] || subjectPrompts.math} multiple choice question for a 5th grader (age 10-11).

Return ONLY a JSON object with this exact structure, no markdown, no extra text:
{
  "question": "The question text here",
  "choices": ["A. first choice", "B. second choice", "C. third choice", "D. fourth choice"],
  "answer": "A",
  "explanation": "Brief explanation of why this is correct (1-2 sentences)"
}

Rules:
- Question must be in English
- Exactly 4 choices labeled A, B, C, D
- answer field contains only the letter (A, B, C, or D)
- Match real M-STEP difficulty and style
- Make it varied`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error("API error: " + errText);
    }

    const data = await res.json();

    // レスポンスからテキストを取得
    let text = "";
    if (data.content && Array.isArray(data.content)) {
      for (const block of data.content) {
        if (block.type === "text") text += block.text;
      }
    }

    // JSONを抽出
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in response");
    const question = JSON.parse(jsonMatch[0]);

    // 必須フィールド確認
    if (!question.question || !Array.isArray(question.choices) || !question.answer) {
      throw new Error("Invalid question format");
    }

    return { statusCode: 200, headers, body: JSON.stringify(question) };

  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
