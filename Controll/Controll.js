import connect from "../model/studentSchema.js"
import fs from 'fs'
import path from 'path'


export const showAlldata = async (req, res) => {
  try {
    const sutdent = await connect.find();
    res.json(sutdent);
  } catch (err) {
    res.status(500).json({message : err.message})
  }
}
export const showStudent = async (req, res) => {
  try {
    const sutdent = await connect.findById(req.params.id);
    if (!sutdent) return res.status(404).json({ messgae: "Student Not Found" });
    res.json(sutdent);
  } catch (err) {
    res.status(500).json({message : err.message})
  }
}
export const addStudent = async (req, res) => {
  try {
    // const sutdent = await connect.create(req.body);

    const student = new connect(req.body)
    if (req.file) {
      student.picture = req.file.filename
    }
    const newStudent = await student.save()
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(404).json({message : err.message})
  }
}
export const updateStudent = async (req, res) => {
  try {
    const sutdent = await connect.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!sutdent) return res.status(404).json({ messgae: "Student Not Found" });
    res.json(sutdent);
  } catch (err) {
    res.status(404).json({message : err.message})
  }
}
export const deleteStudnet = async (req, res) => {
  try {
    const sutdent = await connect.findByIdAndDelete(req.params.id);
    if (!sutdent) return res.status(400).json({ messgae: "Student Not Found" });

    if (sutdent.picture) {
      const filepath = path.join("./upload", sutdent.picture);
      fs.unlink(filepath, (err) => {
        if(err) return console.log('faild to delete :' , err)
      })
    }
      res.json({ messgae: "Student Deleted" });
  } catch (err) {
    res.status(500).json({message : err.message})
  }
}