// Chart 1: Top Fastest Growing Jobs
const ctx1 = document.getElementById('myChart1');
new Chart(ctx1, {
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
            'DevOps Engineers',
            'Renewable Energy Engineers',
        ],
        datasets: [{
            label: 'Top Fastest Growing Jobs',
            data: [112, 92, 81, 58, 54, 49, 48, 48, 47, 43, 40, 38, 37, 36, 36],
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            barThickness: 15
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
            datalabels: {
                anchor: 'end',
                align: 'right',
                formatter: (value) => `${value}%`,
                color: '#333',
                font: { size: 12 }
            }
        },
        scales: {
            x: {
                min: 0,
                max: 120,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Growth Percentage (%)',
                    font: { size: 14 }
                }
            },
            y: { beginAtZero: true }
        }
    },
    plugins: [ChartDataLabels]
});

// Chart 2: Top Fastest Declining Jobs
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
            'Door-to-Door Sales Workers',
            'Graphic Designers',
            'Claims Adjusters and Investigators',
            'Legal Officials',
            'Legal Secretaries',
            'Telemarketers',
        ],
        datasets: [{
            label: 'Top Fastest Declining Jobs',
            data: [-37, -32, -28, -20, -20, -20, -18, -17, -16, -16, -15.5, -15, -14.5, -14, -14],
            backgroundColor: 'rgba(255, 99, 132, 0.7)', // Red
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            barThickness: 15
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
            datalabels: {
                anchor: 'end',
                align: 'right',
                formatter: (value) => `${value}%`,
                color: '#333',
                font: { size: 12 }
            }
        },
        scales: {
            x: {
                min: -40,
                max: 0,
                title: {
                    display: true,
                    text: 'Decline Percentage (%)',
                    font: { size: 14 }
                }
            },
            y: { beginAtZero: true }
        }
    },
    plugins: [ChartDataLabels]
});

// Chart 3: Core Skills in 2025
const ctx3 = document.getElementById('myChart3');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [
            'Analytical Thinking', 'Resilience, Flexibility and Agility',
            'Leadership and Social Influence', 'Creative Thinking',
            'Motivation and Self-Awareness', 'Technological Literacy',
            'Empathy and Active Listening', 'Curiosity and Lifelong Learning',
            'Talent Management', 'Service Orientation and Customer Service',
            'AI and Big Data', 'Systems Thinking', 'Resource Management and Operations',
            'Dependability and Attention to Detail', 'Quality Control',
            'Teaching and Mentoring', 'Networks and Cybersecurity',
            'Design and User Experience', 'Multi-lingualism',
            'Marketing and Media', 'Reading, Writing and Mathematics',
            'Environmental Stewardship', 'Programming',
            'Manual Dexterity and Precision', 'Global Citizenship',
            'Sensory-Processing Abilities'
        ],
        datasets: [{
            label: 'Core Skills in 2025',
            data: [69, 67, 61, 57, 51, 50, 50, 47, 47, 45, 42, 41, 37, 35, 26, 25, 25, 23, 21, 21, 20, 17, 14, 13, 13, 6],
            backgroundColor: 'rgba(75, 192, 192, 0.7)', // Teal
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barThickness: 15
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
            datalabels: {
                anchor: 'end',
                align: 'right',
                formatter: (value) => `${value}%`,
                color: '#333',
                font: { size: 12 }
            }
        },
        scales: {
            x: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Percentage (%)',
                    font: { size: 14 }
                }
            },
            y: { beginAtZero: true }
        }
    },
    plugins: [ChartDataLabels]
});
