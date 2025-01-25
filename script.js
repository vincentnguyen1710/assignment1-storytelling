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

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [
            'Analytical thinking',
            'Resilience, flexibility and agility',
            'Leadership and social influence',
            'Creative thinking',
            'Motivation and self-awareness',
            'Technological literacy',
            'Empathy and active listening',
            'Curiosity and lifelong learning',
            'Talent management',
            'Service orientation and customer service',
            'AI and big data',
            'Systems thinking',
            'Resource management and operations',
            'Dependability and attention to detail',
            'Quality control',
            'Teaching and mentoring',
            'Networks and cybersecurity',
            'Design and user experience',
            'Multi-lingualism',
            'Marketing and media',
            'Reading, writing and mathematics',
            'Environmental stewardship',
            'Programming',
            'Manual dexterity, endurance and precision',
            'Global citizenship',
            'Sensory-processing abilities',
        ],
        datasets: [{
            label: 'Top fastest declining jobs',
            data: [69, 67, 61, 57, 51, 50, 50, 47, 47, 45, 42, 41, 37, 35, 26, 25, 25, 23, 21, 21, 20, 17, 14, 13, 13, 6],
            borderWidth: 1,
            barThickness: 15,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 
                'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 
                'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)', 
                'rgba(201, 203, 207, 0.5)', 'rgba(255, 140, 0, 0.5)', 
                'rgba(60, 179, 113, 0.5)', 'rgba(30, 144, 255, 0.5)', 
                'rgba(123, 104, 238, 0.5)', 'rgba(238, 130, 238, 0.5)', 
                'rgba(46, 139, 87, 0.5)', 'rgba(255, 69, 0, 0.5)', 
                'rgba(0, 128, 128, 0.5)', 'rgba(72, 61, 139, 0.5)', 
                'rgba(0, 191, 255, 0.5)', 'rgba(255, 215, 0, 0.5)', 
                'rgba(240, 128, 128, 0.5)', 'rgba(0, 255, 127, 0.5)', 
                'rgba(106, 90, 205, 0.5)', 'rgba(95, 158, 160, 0.5)', 
                'rgba(221, 160, 221, 0.5)', 'rgba(192, 192, 192, 0.5)', 
                'rgba(205, 92, 92, 0.5)', 'rgba(70, 130, 180, 0.5)',
            ],
            borderColor: [
                'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 
                'rgb(255, 206, 86)', 'rgb(75, 192, 192)', 
                'rgb(153, 102, 255)', 'rgb(255, 159, 64)', 
                'rgb(201, 203, 207)', 'rgb(255, 140, 0)', 
                'rgb(60, 179, 113)', 'rgb(30, 144, 255)', 
                'rgb(123, 104, 238)', 'rgb(238, 130, 238)', 
                'rgb(46, 139, 87)', 'rgb(255, 69, 0)', 
                'rgb(0, 128, 128)', 'rgb(72, 61, 139)', 
                'rgb(0, 191, 255)', 'rgb(255, 215, 0)', 
                'rgb(240, 128, 128)', 'rgb(0, 255, 127)', 
                'rgb(106, 90, 205)', 'rgb(95, 158, 160)', 
                'rgb(221, 160, 221)', 'rgb(192, 192, 192)', 
                'rgb(205, 92, 92)', 'rgb(70, 130, 180)',
            ],
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            tooltip: {
                enabled: true,
            },
            datalabels: {
                anchor: 'end',
                align: 'right',
                formatter: (value) => `${value}%`,
                color: '#000',
                font: {
                    size: 12,
                }
            }
        },
        scales: {
            x: {
                min: 0,
                max: 100,
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            }
        }
    },
    plugins: [ChartDataLabels], // Include Chart.js DataLabels plugin
});
