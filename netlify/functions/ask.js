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

  try {
    const { subject } = JSON.parse(event.body);

    const subjectPrompts = {
      math:    "5th grade Michigan M-STEP Mathematics",
      science: "5th grade Michigan M-STEP Science (ecosystems, matter/energy, Earth science)",
      social:  "5th grade Michigan M-STEP Social Studies (US history, Michigan geography, civics, economics)",
    };

    const prompt = `Generate a ${subjectPrompts[subject] || subjectPrompts.math} multiple choice question for a 5th grader (age 10-11).

Return ONLY valid JSON, no markdown, no extra text:
{"question":"...","choices":["A. ...","B. ...","C. ...","D. ..."],"answer":"A","explanation":"..."}`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "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",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));

    const text = data.content[0].text;
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON in response");
    const question = JSON.parse(match[0]);

    return { statusCode: 200, headers, body: JSON.stringify(question) };

  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
