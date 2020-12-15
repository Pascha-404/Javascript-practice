function returnDay(day){
    if (day < 1 | day > 7){
        return null;
    } else {
        const weekDays = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]
        for (let i = 0; i < weekDays.length; i++);
        return weekDays[day - 1]
    }
}