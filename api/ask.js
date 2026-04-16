export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const subject = body.subject;
    const questionNumber = body.questionNumber || 1;

    // 難易度設定（オプションA：段階的に難しくなる）
    let difficulty;
    if (questionNumber <= 3) difficulty = "easy - straightforward and simple";
    else if (questionNumber <= 7) difficulty = "medium - requires some thinking";
    else difficulty = "hard - challenging, requires deeper understanding";

    // M-STEP実際の出題トピック
    const subjectPrompts = {
      math: `5th grade Michigan M-STEP Mathematics focusing on these topics:
- Volume of rectangular prisms and cubes (cubic units)
- Volume of irregular 3D shapes
- Fractions (adding, subtracting, multiplying)
- Decimal operations
- Coordinate planes
- Data analysis and line plots
Difficulty: ${difficulty}`,

      science: `5th grade Michigan M-STEP Science focusing on these topics:
- Cells, tissues, organs, and organ systems
- How body systems work together (digestive, circulatory, respiratory, nervous)
- Ecosystems and food webs
- Matter and its properties
- Energy transfer
- Earth's systems
Difficulty: ${difficulty}`,

      social: `5th grade Michigan M-STEP Social Studies focusing on these topics:
- Pre-colonial America and Native Americans
- European exploration and colonization
- Colonial life in America (1600s-1700s)
- Events leading to American Revolution
- Declaration of Independence and its meaning
- Early American government
- Michigan history and geography
Difficulty: ${difficulty}`,
    };

    const prompt = `Generate a ${subjectPrompts[subject] || subjectPrompts.math} multiple choice question for a 5th grader (age 10-11).

Return ONLY valid JSON, no markdown:
{"question":"...","choices":["A. ...","B. ...","C. ...","D. ..."],"answer":"A","explanation":"..."}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(data));

    const text = data.content[0].text;
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON found");
    const question = JSON.parse(match[0]);

    res.status(200).json(question);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
