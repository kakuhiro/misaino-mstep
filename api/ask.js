export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const { subject } = req.body;

    const subjectPrompts = {
      math:    "5th grade Michigan M-STEP Mathematics",
      science: "5th grade Michigan M-STEP Science (ecosystems, matter/energy, Earth science)",
      social:  "5th grade Michigan M-STEP Social Studies (US history, Michigan geography, civics, economics)",
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
