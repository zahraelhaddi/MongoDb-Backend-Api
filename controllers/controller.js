import Questions from '../models/questionSchema.js';
import Results from '../models/resultSchema.js';
import questions, { answers } from '../database/data.js';
//by zahra el haddi


export async function getQuestions(req, res) {
  //res.json("questions api get request");
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    console.log({ error });
  }
}

//insert ALL QUESTIONS
export async function insertQuestions(req, res) {
  //res.json("questions api post request");
  try {
    Questions.insertMany({ questions: questions, answers: answers });
    res.json({ msg: "Data saved Successfully..." });
  } catch (error) {
    console.log({ error });
  }
}

//delete questions
export async function dropQuestions(req, res) {
  //res.json("questions api delete request");
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" })
  } catch (error) {
    console.log({ error });
  }
}


//get Results
export async function getResults(req, res) {
  //res.json("results api get request");
  try {
    const r = await Results.find();
    res.json({ r });
  } catch (error) {
    console.log(error);
  }
}
//post all results
export async function storeResults(req, res) {
  //res.json("results api post request");
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not provided!");
    Results.create({ username, result, attempts, points, achieved },
      res.json({ msg: "Data stored successfully!" }))
  } catch (error) {
    res.json(error);
  }
}
//delete all results
export async function deleteResults(req, res) {
  //res.json("results api delete request");
  try {
    await Results.deleteMany();
    res.json({ msg: "Results Deleted Successfully...!" })
  } catch (error) {
    res.json({ error })
  }
} 