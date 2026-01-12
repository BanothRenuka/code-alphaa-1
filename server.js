const express = require("express");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 3000;

app.get("/generate-pdf", (req, res) => {
    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=IoT_Smart_Agriculture_Report.pdf");

    doc.pipe(res);

    // Title
    doc.fontSize(18).text("IoT Applications in Smart Agriculture", { align: "center" });
    doc.moveDown(2);

    // Content (800–1000 words)
    doc.fontSize(12).text(`
The Internet of Things (IoT) has emerged as a powerful technology that is transforming
traditional agriculture into smart agriculture. Smart agriculture uses IoT devices,
sensors, and data analytics to improve crop productivity, optimize resource utilization,
and ensure sustainable farming practices. With the increasing global population and
climate challenges, IoT-based agricultural solutions play a crucial role in ensuring food
security.

IoT applications in smart agriculture involve the deployment of sensors that monitor
soil moisture, temperature, humidity, light intensity, and nutrient levels. These sensors
collect real-time data and transmit it to cloud-based platforms for analysis. Farmers can
access this information through mobile applications and make data-driven decisions to
improve crop yield and reduce waste.

One of the most significant applications of IoT in agriculture is smart irrigation.
Traditional irrigation methods often lead to water wastage. IoT-enabled irrigation
systems use soil moisture sensors and weather forecasts to automatically control water
supply. This ensures that crops receive the right amount of water at the right time,
conserving water and increasing efficiency.

Crop monitoring and disease detection are also enhanced through IoT technology. Sensors
and cameras placed in fields continuously monitor plant health. Machine learning
algorithms analyze this data to detect early signs of diseases or pest infestations.
Early detection allows farmers to take preventive measures, reducing crop loss and
minimizing the use of pesticides.

Livestock monitoring is another important IoT application in smart agriculture. Wearable
devices attached to animals track health parameters such as body temperature, movement,
and feeding patterns. This helps farmers detect illnesses early and improve animal
welfare. Automated feeding and milking systems further enhance productivity.

IoT also plays a vital role in supply chain management. Sensors track produce from farms
to markets, monitoring storage conditions such as temperature and humidity. This ensures
food quality and reduces spoilage during transportation. Real-time tracking improves
transparency and efficiency across the agricultural supply chain.

Despite its benefits, smart agriculture faces challenges such as high implementation
costs, lack of technical knowledge, and connectivity issues in rural areas. Data security
and privacy are also concerns, as sensitive agricultural data must be protected from
unauthorized access. Addressing these challenges requires government support, farmer
training, and affordable technology solutions.

In conclusion, IoT applications in smart agriculture are revolutionizing farming by
enabling precision agriculture, efficient resource management, and sustainable practices.
As IoT technology continues to evolve, smart agriculture will play a vital role in
meeting global food demands while preserving natural resources.
    `, { align: "justify" });

    // References
    doc.moveDown(2);
    doc.fontSize(14).text("References");
    doc.moveDown(1);
    doc.fontSize(12).text(`
1. Gubbi et al., "Internet of Things (IoT): A Vision, Architectural Elements," Future Generation Computer Systems.
2. FAO – Digital Agriculture and IoT Reports.
3. IEEE Internet of Things Journal – Smart Agriculture.
4. World Economic Forum – IoT in Agriculture.
    `);

    doc.end();
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/generate-pdf`);
});
