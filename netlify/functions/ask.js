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

Return ONLY a JSON object with this exact structure, no markdown:
{
  "question": "The question text here",
  "choices":
