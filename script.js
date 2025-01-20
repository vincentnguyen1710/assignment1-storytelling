const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Big Data Specialists',
            'FinTech Engineers',
            'AI and Machine Learning Specialists',
            'Software and Applications Developers',
            'Security Management Specialists',
            'Data Warehousing Specialists',
            'Autonomous and Electric Vehicle Specialists',
            'UI and UX Designers',
            'Light Truck or Delivery Services Drivers',
            'Internet of Things Specialists',
            'Data Analysts and Scientists',
            'Environmental Engineers',
            'Information Security Analysts',
            'Devops Engineer',
            'Renewable Energy Engineers',
        ],
        datasets: [{
            label: 'Top fastest growing jobs',
            data: [112, 92, 81, 58, 54, 49, 48, 48, 47, 43, 40, 38, 37, 36, 36],
            borderWidth: 1,
            barThickness: 15, // Set the bar thickness (in pixels)
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                min: -40, // Start the x-axis at -40
                max: 120, // Optional: Extend the maximum range if needed
            },
            y: {
                beginAtZero: true,

            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [
            'Postal Service Clerks',
            'Bank Tellers and Related Clerks',
            'Data Entry Clerks',
            'Cashiers and Ticket Clerks',
            'Administrative Assistants and Executive Secretaries',
            'Printing and Related Trades Workers',
            'Accounting, Bookkeeping and Payroll Clerks',
            'Material-Recording and Stock-Keeping Clerks',
            'Transportation Attendants and Conductors',
            'Door-To-Door Sales Workers, News and Street Vendors, and Related Workers',
            'Graphic Designers',
            'Claims Adjusters, Examiners, and Investigators',
            'Legal Officials',
            'Legal Secretaries',
            'Telemarketers',
        ],
        datasets: [{
            label: 'Top fastest declining jobs',
            data: [-37, -32, -28, -20, -20, -20, -18, -17, -16, -16, -15.5, -15, -14.5, -14, -14, -14],
            borderWidth: 1,
            barThickness: 15, // Set the bar thickness (in pixels)
            backgroundColor: [ 
                'rgba(153, 102, 255, 0.5)',  
              ],
              borderColor: [
                'rgb(153, 102, 255)',         
              ],
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                min: -40, // Start the x-axis at -40
                max: 120, // Optional: Extend the maximum range if needed
            },
            y: {
                beginAtZero: true,

            }
        }
    }
});

