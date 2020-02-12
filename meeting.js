const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjo n:Tornbull;Raphael:Corwill;Alfred:Corwill"
function meeting (s) {
    let res = s.split(';')
        .map(value => value.split(':').reverse().join(':'))
        .sort()
        .map(value => `(${value.split(':')[0]}, ${value.split(':')[1]})`.toUpperCase())
        .join``
    console.log(res)
}
meeting(s)