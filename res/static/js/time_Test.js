$(document).ready()
{
    function Time()
    {
        var time = new Date();               //每次刷新重新更新时间
        var hour = time.getHours();         //加括号0.0
        var minutes = time.getMinutes();
        var second = time.getSeconds();
        if (second < 10)
            second = "0" + second;
        if (hour < 10)
            hour = "0" + hour;
        if (minutes < 10)
            minutes = "0" + minutes;
        $(".time").html(hour + ":" + minutes + ":" + second);
    }
    setInterval(Time, 1000);
}