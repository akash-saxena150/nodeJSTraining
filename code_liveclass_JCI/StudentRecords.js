function Record(
    
){
    this.marks={
        p: record.marks.p,c: record.marks.c, m: record.marks.m
    };
    this.name = record.name;
    this.calcPercentage = function(){
        var marks = this.marks;
        return (marks.p + marks.c + marks.m)/3;
    }
}
function StudentGrade(avg){
    if(avg>=80)
        return 'A'
    if(70<=avg && avg<80)
        return 'B'
    if(60<=avg && avg<70)
        return 'C'
    else
        return 'D'
}
module.exports = {
    Record: Record,
    StudentGrade: StudentGrade
}