const QUESTION_BANK = {
  math: [
    { question: "A rectangular prism has length 4 cm, width 3 cm, and height 5 cm. What is its volume?", choices: ["A. 12 cubic centimeters", "B. 20 cubic centimeters", "C. 60 cubic centimeters", "D. 120 cubic centimeters"], answer: "C", explanation: "Volume = length × width × height = 4 × 3 × 5 = 60 cubic centimeters." },
    { question: "A box has a base that is 6 inches long and 2 inches wide. The height is 4 inches. What is the volume of the box?", choices: ["A. 12 cubic inches", "B. 24 cubic inches", "C. 36 cubic inches", "D. 48 cubic inches"], answer: "D", explanation: "Volume = 6 × 2 × 4 = 48 cubic inches." },
    { question: "A prism is filled with unit cubes. There are 5 cubes in each row, 3 rows in each layer, and 2 layers. What is the volume of the prism?", choices: ["A. 10 cubic units", "B. 15 cubic units", "C. 30 cubic units", "D. 60 cubic units"], answer: "C", explanation: "Volume = 5 × 3 × 2 = 30 cubic units." },
    { question: "A fish tank is 7 decimeters long, 4 decimeters wide, and 3 decimeters high. What is its volume?", choices: ["A. 28 cubic decimeters", "B. 42 cubic decimeters", "C. 56 cubic decimeters", "D. 84 cubic decimeters"], answer: "D", explanation: "Volume = 7 × 4 × 3 = 84 cubic decimeters." },
    { question: "A solid figure is made of two rectangular prisms. Prism A has volume 24 cubic meters. Prism B has volume 30 cubic meters. What is the total volume?", choices: ["A. 6 cubic meters", "B. 54 cubic meters", "C. 56 cubic meters", "D. 720 cubic meters"], answer: "B", explanation: "Total volume = 24 + 30 = 54 cubic meters." },
    { question: "A storage box has a square base. Each side of the base is 5 inches, and the height is 8 inches. What is the volume?", choices: ["A. 25 cubic inches", "B. 40 cubic inches", "C. 100 cubic inches", "D. 200 cubic inches"], answer: "D", explanation: "Volume = 5 × 5 × 8 = 200 cubic inches." },
    { question: "A prism has 4 cubes in each row, 4 rows in each layer, and 4 layers. Which expression gives the volume?", choices: ["A. 4 + 4 + 4", "B. 4 × 4 × 4", "C. 4 × 4 + 4", "D. 4 × (4 + 4)"], answer: "B", explanation: "Volume is the product of length, width, and height: 4 × 4 × 4." },
    { question: "A rectangular prism has a volume of 96 cubic feet. The length is 8 feet and the width is 4 feet. What is the height?", choices: ["A. 2 feet", "B. 3 feet", "C. 4 feet", "D. 6 feet"], answer: "B", explanation: "96 = 8 × 4 × h, so h = 96 ÷ 32 = 3 feet." },
    { question: "A prism has volume 120 cubic centimeters and base area 20 square centimeters. What is its height?", choices: ["A. 3 cm", "B. 4 cm", "C. 5 cm", "D. 6 cm"], answer: "D", explanation: "Volume = base area × height, so 120 = 20 × h, h = 6 cm." },
    { question: "A building is made of two connected rectangular prisms. One is 3 m by 2 m by 4 m. The other is 3 m by 2 m by 1 m. What is the total volume?", choices: ["A. 18 cubic meters", "B. 24 cubic meters", "C. 30 cubic meters", "D. 36 cubic meters"], answer: "C", explanation: "First volume = 3 × 2 × 4 = 24, second = 3 × 2 × 1 = 6, total = 30 cubic meters." }
  ],
  science: [
    { question: "What is a cell?", choices: ["A. A tiny living unit that makes up all organisms", "B. A large organ inside the body", "C. A group of tissues working together", "D. A type of blood"], answer: "A", explanation: "A cell is the smallest unit of life that makes up all living things." },
    { question: "Which organism is made of only one cell?", choices: ["A. Human", "B. Tree", "C. Bacterium", "D. Dog"], answer: "C", explanation: "Bacteria are single-celled organisms." },
    { question: "Which list shows the levels of organization in order from smallest to largest?", choices: ["A. Organism, organ system, organ, tissue, cell", "B. Cell, tissue, organ, organ system, organism", "C. Tissue, cell, organ, organ system, organism", "D. Cell, organ, tissue, organ system, organism"], answer: "B", explanation: "Cells form tissues, tissues form organs, organs form organ systems, and organ systems form an organism." },
    { question: "What is a tissue?", choices: ["A. A group of similar cells working together", "B. A group of organs working together", "C. A single cell", "D. A whole organism"], answer: "A", explanation: "Tissues are groups of similar cells that work together to do a job." },
    { question: "Which is an example of an organ?", choices: ["A. Muscle tissue", "B. Heart", "C. Cell", "D. Blood"], answer: "B", explanation: "An organ is made of different tissues; the heart is an organ." },
    { question: "What is an organ system?", choices: ["A. A group of similar cells", "B. A group of tissues working together", "C. A group of organs working together", "D. A single organ"], answer: "C", explanation: "Organ systems are groups of organs that work together to perform a major function." },
    { question: "Which group of organs belongs to the digestive system?", choices: ["A. Heart, blood vessels", "B. Brain, spinal cord", "C. Stomach, intestines", "D. Lungs, trachea"], answer: "C", explanation: "The stomach and intestines are major organs in the digestive system." },
    { question: "Which system is mainly responsible for carrying oxygen and nutrients around the body?", choices: ["A. Digestive system", "B. Circulatory system", "C. Respiratory system", "D. Nervous system"], answer: "B", explanation: "The circulatory system, including the heart and blood vessels, carries oxygen and nutrients." },
    { question: "If a person's lungs are damaged, which system is directly affected first?", choices: ["A. Digestive system", "B. Circulatory system", "C. Respiratory system", "D. Nervous system"], answer: "C", explanation: "The lungs are part of the respiratory system." },
    { question: "The lungs add oxygen to the blood. Which system works with the respiratory system to move this oxygen around the body?", choices: ["A. Circulatory system", "B. Digestive system", "C. Skeletal system", "D. Nervous system"], answer: "A", explanation: "The circulatory system moves oxygen-rich blood to all parts of the body." }
  ],
  social: [
    { question: "What was one main reason many European explorers sailed to the Americas in the late 1400s and 1500s?", choices: ["A. To find new trade routes and gain wealth", "B. To escape from the Black Death", "C. To visit friends and family", "D. To avoid learning new languages"], answer: "A", explanation: "Many explorers wanted new trade routes and riches, such as gold and spices." },
    { question: "Which statement best describes Christopher Columbus's first voyage in 1492?", choices: ["A. He was trying to reach Asia by sailing west.", "B. He was the first person to discover that the Earth is round.", "C. He was looking for a new home for English settlers.", "D. He was sent to explore the Pacific Ocean."], answer: "A", explanation: "Columbus sailed west from Europe hoping to find a new route to Asia." },
    { question: "Before Europeans arrived, what is true about Indigenous peoples living in North America?", choices: ["A. They all spoke the same language.", "B. They had many different cultures and ways of life.", "C. They all lived in large stone cities.", "D. They did not know how to farm."], answer: "B", explanation: "Indigenous peoples had many different languages, governments, and cultures." },
    { question: "Why did many of the Pilgrims on the Mayflower leave Europe to start the Plymouth Colony?", choices: ["A. To find gold and silver", "B. To have religious freedom", "C. To escape from slavery", "D. To become fur traders"], answer: "B", explanation: "Pilgrims wanted to practice their religion freely." },
    { question: "What was the Mayflower Compact?", choices: ["A. A peace treaty with Native Americans", "B. A set of rules for self-government in Plymouth", "C. A map of the New England colonies", "D. A list of supplies needed for the voyage"], answer: "B", explanation: "The Mayflower Compact was an agreement to make and follow fair laws." },
    { question: "Which statement compares Jamestown and Plymouth correctly?", choices: ["A. Both were started mainly for religious freedom.", "B. Jamestown focused more on making money; Plymouth focused more on religion.", "C. Both were in the Southern colonies.", "D. Plymouth was in Virginia; Jamestown was in Massachusetts."], answer: "B", explanation: "Jamestown was started for economic reasons, while Plymouth was founded for religious reasons." },
    { question: "Which colony would most likely grow rice and have many large plantations?", choices: ["A. A New England colony", "B. A Middle colony", "C. A Southern colony", "D. A western territory"], answer: "C", explanation: "Southern colonies had warm climates and long growing seasons, good for plantations." },
    { question: "How did the French and Indian War lead to problems between Britain and the colonies?", choices: ["A. Britain lost all of its land in North America.", "B. Britain began to tax the colonies to pay for the war.", "C. The colonies refused to help Britain in the war.", "D. The war made the colonies independent."], answer: "B", explanation: "Britain had war debts and taxed the colonies, which made colonists angry." },
    { question: "What did the Stamp Act require colonists to do?", choices: ["A. House British soldiers in their homes", "B. Pay a tax on paper items like newspapers and legal documents", "C. Stop trading with other countries", "D. Sign a loyalty oath to the king"], answer: "B", explanation: "The Stamp Act taxed many printed materials, which upset colonists." },
    { question: "What does the phrase \"no taxation without representation\" mean?", choices: ["A. Colonies wanted no taxes at all.", "B. Only British people should pay taxes.", "C. Colonies wanted a say in making tax laws.", "D. Colonies wanted to choose their own king."], answer: "C", explanation: "Colonists believed they should have representatives in the government that taxed them." }
  ]
};

export default async function handler(req, res) {
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const subject = body.subject || "math";
    const questionNumber = body.questionNumber || 1;
    const answeredIds = body.answeredIds || [];

    // 問題バンクから未回答の問題を選ぶ
    const bank = QUESTION_BANK[subject] || QUESTION_BANK.math;
    const available = bank.filter((_, i) => !answeredIds.includes(i));
    
    if (available.length > 0) {
      // バンクから未回答をランダムに選ぶ
      const idx = Math.floor(Math.random() * available.length);
      const q = available[idx];
      const originalIdx = bank.indexOf(q);
      res.status(200).json({ ...q, bankIndex: originalIdx, fromBank: true });
      return;
    }

    // 全問回答済みの場合はAPIで生成
    let difficulty;
    if (questionNumber <= 3) difficulty = "easy";
    else if (questionNumber <= 7) difficulty = "medium";
    else difficulty = "hard";

    const subjectPrompts = {
      math: "5th grade Michigan M-STEP Mathematics: volume of rectangular prisms, composite figures, fractions, decimals",
      science: "5th grade Michigan M-STEP Science: cells, tissues, organs, organ systems, body systems interactions",
      social: "5th grade Michigan M-STEP Social Studies: European exploration, colonial America, American Revolution causes"
    };

    const prompt = `Generate a ${subjectPrompts[subject]} multiple choice question. Difficulty: ${difficulty}.
Return ONLY valid JSON:
{"question":"...","choices":["A. ...","B. ...","C. ...","D. ..."],"answer":"A","explanation":"..."}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": process.env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 500, messages: [{ role: "user", content: prompt }] })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(data));
    const text = data.content[0].text;
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON found");
    res.status(200).json({ ...JSON.parse(match[0]), fromBank: false });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
