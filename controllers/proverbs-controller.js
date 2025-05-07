const fs = require("fs");
const path = "./data/proverbs.json";

function readData() {
  return JSON.parse(fs.readFileSync(path));
}

function writeData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

exports.getAllProverbs = (req, res) => {
  let data = readData();
  const { category, search } = req.query;

  if (category) {
    data = data.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const s = search.toLowerCase();
    data = data.filter(p =>
      p.textDari.toLowerCase().includes(s) ||
      p.textPashto.toLowerCase().includes(s) ||
      p.translationEn.toLowerCase().includes(s)
    );
  }

  res.json(data);
};

exports.getRandomProverb = (req, res) => {
  const data = readData();
  const random = data[Math.floor(Math.random() * data.length)];
  res.json(random);
};

exports.getProverbById = (req, res) => {
  const data = readData();
  const found = data.find(p => p.id == req.params.id);
  if (!found) return res.status(404).json({ message: "Proverb not found" });
  res.json(found);
};

exports.addProverb = (req, res) => {
  const data = readData();
  const newProverb = { id: Date.now(), ...req.body };
  data.push(newProverb);
  writeData(data);
  res.status(201).json(newProverb);
};

exports.updateProverb = (req, res) => {
  let data = readData();
  const index = data.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Proverb not found" });

  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
};

exports.deleteProverb = (req, res) => {
  let data = readData();
  data = data.filter(p => p.id != req.params.id);
  writeData(data);
  res.json({ message: "Proverb deleted" });
};
