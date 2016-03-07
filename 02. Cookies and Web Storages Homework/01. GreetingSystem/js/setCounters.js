(function incrementLoads() {
    //Set session counter
    if (!sessionStorage.counter) {
        sessionStorage.setItem("counter", 0);
    }
    var currentCount = parseInt(sessionStorage.getItem("counter"));
    currentCount++;
    sessionStorage.setItem('counter', currentCount);

    //Set total counter
    if (!localStorage.getItem('counter')) {
        localStorage.setItem("counter", 0);
    }
    var totalCount = localStorage.getItem('counter');
    totalCount++;
    localStorage.setItem('counter', totalCount);

    //Print the resul to DOM
    document.getElementById('session-visits').innerHTML = 'Session visits: ' + currentCount;
    document.getElementById('total-visits').innerHTML = 'Total visits: ' + totalCount;
}());