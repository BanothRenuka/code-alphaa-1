function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "pt", "a4");

    const content = document.getElementById("reportContent");

    doc.html(content, {
        callback: function (doc) {
            doc.save("IoT_Smart_Homes_Research_Report.pdf");
        },
        x: 20,
        y: 20,
        width: 555
    });
}
