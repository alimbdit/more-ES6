const student = {
    marks: {
        math: 50,
        physics: 60,
        chemistry: 70,
    }
}

const mark = student.marks.math;
// console.log(mark);

const subMark = student['marks']['physics'];

// console.log(subMark);
const subject = 'chemistry';
const subChMark = student.marks[subject];
console.log(subChMark);

