import { useEffect, useState } from "react";
import StudentForm from "./components/studentform";
import StudentList from "./components/studentlist";

export interface Student {
  name: string;
  department: string;
}

function App() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
  console.log('component mounted');
}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || department.trim() === "") return;

    const newStudent: Student = {
      name,
      department,
    };

    setStudents([...students, newStudent]);

    setName("");
    setDepartment("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-6 w-96">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student Registration
        </h1>

        <StudentForm
          name={name}
          department={department}
          setName={setName}
          setDepartment={setDepartment}
          handleSubmit={handleSubmit}
        />

        <StudentList students={students} />

      </div>
    </div>
  );
}

export default App;