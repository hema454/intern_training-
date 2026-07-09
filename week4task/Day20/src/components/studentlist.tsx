import type { Student } from "../App";

type Props = {
  students: Student[];
};

function StudentList({ students }: Props) {
  return (
    <div>

      <h2 className="text-xl font-semibold mb-3">
        Registered Students
      </h2>

      {students.map((student, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg shadow p-3 mb-3"
        >
          <p>
            <span className="font-bold">Name:</span> {student.name}
          </p>

          <p>
            <span className="font-bold">Department:</span> {student.department}
          </p>
        </div>
      ))}

    </div>
  );
}

export default StudentList;