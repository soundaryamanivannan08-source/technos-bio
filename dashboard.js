const views = {
    overview: `
        <div class="bento-grid">
            <div class="bento-card stat-primary fade-up" style="grid-column: span 2; background: linear-gradient(135deg, #10b981 0%, #047a55 100%); color: white;">
                <h2>Welcome back, Dr. Vance.</h2>
                <p style="opacity:0.9;">System integrity is at 99.8%. 12 new sequence batches waiting for review.</p>
                <div style="margin-top:20px; font-size: 2rem; font-weight: 800;">4,281 <span style="font-size:1rem;font-weight:400;opacity:0.8;">Samples Analyzed Today</span></div>
            </div>
            
            <div class="bento-card fade-up">
                <div class="stat-icon" style="color:#10b981"><i class="fa-solid fa-microscope"></i></div>
                <div><h3>96.8%</h3><small>CRISPR Accuracy</small></div>
            </div>
            
            <div class="bento-card fade-up">
                <div class="stat-icon" style="color:#0ea5e9"><i class="fa-solid fa-server"></i></div>
                <div><h3>14.2TB</h3><small>Processed Data</small></div>
            </div>

            <div class="bento-card fade-up" style="grid-column: span 2; grid-row: span 2;">
                <h4>Global Node Activity</h4>
                <div class="chart-wrapper">
                    <canvas id="lineChart" style="margin-top:15px;"></canvas>
                </div>
            </div>
            
            <div class="bento-card fade-up" style="grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column;">
                <h4>Active Personnel Overview</h4>
                <div class="team-list" style="margin-top: 15px; display:flex; flex-direction: column; gap: 15px;">
                  <div style="display:flex; flex-direction:column; gap:15px;">

    <!-- Row 1 -->
    <div style="display:flex; justify-content:space-between; align-items:center;">
        
        <div style="display:flex; align-items:center; gap:10px;">
            <img src="assets/uifaces-popular-avatar (4).webp"
                 style="width:45px; height:45px; border-radius:50%; object-fit:cover; border:2px solid #10b981;">
            
            <div>
                <strong>Dr. Emily Chen</strong><br>
                <small style="color:var(--text-muted);">Lead Geneticist</small>
            </div>
        </div>

        <div style="display:flex; align-items:center; gap:10px;">
            <p class="tag tag-active" style="margin:0;">Active</p>
            <a href="404.html" class="report-btn">Report</a>
        </div>

    </div>

  <!-- Row 2 -->
    <div style="display:flex; justify-content:space-between; align-items:center;">
        
        <div style="display:flex; align-items:center; gap:10px;">
            <img src="assets/img_team.webp"
                 style="width:45px; height:45px; border-radius:50%; object-fit:cover; border:2px solid #10b981;">
            
            <div>
                <strong>Julian Thorne</strong><br>
                <small style="color:var(--text-muted);">Neural Architect</small>
            </div>
        </div>

        <div style="display:flex; align-items:center; gap:10px;">
            <p class="tag tag-active" style="margin:0;">Active</p>
            <a href="404.html" class="report-btn">Report</a>
        </div>

    </div>


   
   

</div>

        <div>
            <!-- Empty right side for alignment consistency -->
        </div>

    </div>

</div>
                </div>
            </div>
        </div>`,

    research: `
        <div class="bento-grid">
            <div class="bento-card fade-up" style="background: linear-gradient(rgba(16, 185, 129, 0.85), rgba(4, 122, 85, 0.95)), url('assets/lab6.webp'); background-size: cover; background-position: center; color: white; grid-column: span 2;">
                <h4 style="color: white;">Active Projects</h4>
                <div style="font-size:2.5rem; font-weight:800; color: white;">12</div>
            </div>
            <div class="bento-card fade-up" style="background: linear-gradient(rgba(245, 158, 11, 0.85), rgba(180, 83, 9, 0.95)), url('assets/test-tubes2.webp'); background-size: cover; background-position: center; color: white;">
                <h4 style="color: white;">Pending Reviews</h4>
                <div style="font-size:2.5rem; font-weight:800; color: white;">5</div>
            </div>
            <div class="bento-card fade-up" style="grid-column: span 2;">
                <h4>Resource Allocation</h4>
                <div class="chart-wrapper">
                    <canvas id="barChart"></canvas>
                </div>
            </div>

            <!-- More scrollable Research Projects content -->
            <div class="bento-card fade-up colspan-full" style="margin-top: 20px;">
                <h3 style="margin-bottom: 20px;">Ongoing Research Projects</h3>
                
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div style="padding: 20px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
  <strong>CRISPR-Cas9 Optimization for Rare Genetic Disorders</strong>

  <p class="tag tag-active">Active</p>
  <a href="404.html" class="report-btn">Report</a>
</div>
                        <p style="margin: 12px 0; color:var(--text-muted);">Led by Dr. Priya Sharma • Phase III • 87% editing precision achieved.</p>
                        <small>Team: 14 members • Deadline: Dec 2026 • Progress: 78%</small>
                    </div>

                    <div style="padding: 20px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0;">
                       <div style="display:flex; justify-content:space-between; align-items:center;">
  <strong>AI-Driven Protein Folding Prediction (AlphaFold Extension)</strong>

  <p class="tag tag-review">In Review</p>
   <a href="404.html" class="report-btn">Report</a>
</div>
                        <p style="margin: 12px 0; color:var(--text-muted);">Collaboration with DeepMind • 94.3% accuracy on benchmark.</p>
                    </div>

                    <div style="padding: 20px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
  <strong>AI-Driven Protein Folding Prediction (AlphaFold Extension)</strong>

  <p class="tag tag-review">Planing</p>
   <a href="404.html" class="report-btn">Report</a>
</div>
                        <p style="margin: 12px 0; color:var(--text-muted);">Target sample size: 50,000 across Tamil Nadu, Karnataka & Kerala.</p>
                    </div>

                    <div style="padding: 20px; background: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0;">
                       <div style="display:flex; justify-content:space-between; align-items:center;">
  <strong>CRISPR-Cas9 Optimization for Rare Genetic Disorders</strong>

  <p class="tag tag-active">Active</p>
   <a href="404.html" class="report-btn">Report</a>
</div>
                        <p style="margin: 12px 0; color:var(--text-muted);">23 novel methylation sites identified. Funded by ICMR.</p>
                    </div>
                </div>
            </div>
        </div>`,

    staff: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
                    <h4>Staff Directory</h4>
                    <span class="tag tag-blue">Total: 124</span>
                </div>
                
                <!-- More scrollable staff content -->
                <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; align-items:center; gap:15px; padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <img src="assets/uifaces-popular-avatar (4).webp" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Dr. Emily Chen</strong><br>
                            <small style="color:var(--text-muted);">Lead Geneticist • PhD, Stanford</small>
                        </div>
                     <p class="tag tag-active">Active</p>
                      <a href="404.html" class="report-btn">Report</a>
                    </div>

                    <div style="display:flex; align-items:center; gap:15px; padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <img src="./assets/uifaces-popular-avatar (6).webp" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Dr. Arjun Rao</strong><br>
                            <small style="color:var(--text-muted);">Senior Bioinformatician</small>
                        </div>
                        <p class="tag tag-active">Active</p>
                         <a href="404.html" class="report-btn">Report</a>
                    </div>

                    <div style="display:flex; align-items:center; gap:15px; padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <img src="./assets/uifaces-popular-avatar (5).webp" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Ms. Lakshmi Menon</strong><br>
                            <small style="color:var(--text-muted);">Laboratory Manager</small>
                        </div>
                        <p class="tag tag-active">Active</p>
                         <a href="404.html" class="report-btn">Report</a>
                    </div>

                    <div style="display:flex; align-items:center; gap:15px; padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <img src="assets/uifaces-popular-avatar (3).webp" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Dr. Vikram Singh</strong><br>
                            <small style="color:var(--text-muted);">Clinical Research Coordinator</small>
                        </div>
                        <p class="tag tag-active">On Leave</p>
                         <a href="404.html" class="report-btn">Report</a>
                    </div>
                </div>
            </div>
        </div>`,

    employees: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <h4>Employee Directory</h4>
                <p style="color:var(--text-muted); margin:10px 0 20px;">Full list of laboratory and administrative personnel</p>
                
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; min-width:600px;">
                        <thead>
                            <tr style="background:#f1f5f9;">
                                <th style="padding:14px; text-align:left;">Employee Name</th>
                                <th style="padding:14px; text-align:left;">Department</th>
                                <th style="padding:14px; text-align:left;">Role</th>
                                <th style="padding:14px; text-align:center;">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #e2e8f0;">
                                <td style="padding:14px;">Rahul Krishnan</td>
                                <td>Bioinformatics</td>
                                <td>Data Analyst</td>
                                <td> <p class="tag tag-active">Active</p></td>
                                <td><a href="404.html" class="report-btn">Report</a></td>
                            </tr>
                            <tr style="border-bottom:1px solid #e2e8f0;">
                                <td style="padding:14px;">Sneha Patel</td>
                                <td>Genetic Sequencing</td>
                                <td>Lab Technician</td>
                                <td> <p class="tag tag-active">Active</p></td>
                                <td><a href="404.html" class="report-btn">Report</a></td>
                            </tr>
                            <tr style="border-bottom:1px solid #e2e8f0;">
                                <td style="padding:14px;">Vikram Singh</td>
                                <td>Research</td>
                                <td>Junior Scientist</td>
                                <td> <p class="tag tag-active">On Leave</p></td>
                                <td><a href="404.html" class="report-btn">Report</a></td>

                            </tr>
                            <tr style="border-bottom:1px solid #e2e8f0;">
                                <td style="padding:14px;">Ananya Bose</td>
                                <td>Molecular Biology</td>
                                <td>Research Associate</td>
                                <td> <p class="tag tag-active">Active</p></td>
                                <td><a href="404.html" class="report-btn">Report</a></td>
                            </tr>
                            <tr>
                                <td style="padding:14px;">Karthik Rajan</td>
                                <td>Computational Biology</td>
                                <td>Senior Engineer</td>
                                <td> <p class="tag tag-active">Active</p></td>
                                <td><a href="404.html" class="report-btn">Report</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`,

    teams: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <h4>Team Directory</h4>
                <p style="color:var(--text-muted); margin-bottom:20px;">Active research and operational teams</p>
                
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
                    <div style="padding:20px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <strong>Genomics Core Team</strong>
                        <p style="color:var(--text-muted); margin:8px 0;">14 members • Led by Dr. Priya Sharma</p>
                        <div style="margin-top:12px;"><span class="tag">Whole Genome Sequencing</span> <span class="tag">Exome</span></div>
                    </div>
                    
                    <div style="padding:20px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <strong>AI & Computational Biology Unit</strong>
                        <p style="color:var(--text-muted); margin:8px 0;">9 members • Led by Dr. Arjun Rao</p>
                    </div>
                    
                    <div style="padding:20px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <strong>Clinical Translation Team</strong>
                        <p style="color:var(--text-muted); margin:8px 0;">11 members</p>
                    </div>
                    
                    <div style="padding:20px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
                        <strong>Epigenetics Research Group</strong>
                        <p style="color:var(--text-muted); margin:8px 0;">7 members</p>
                    </div>
                </div>
            </div>
        </div>`,

        members: `
        <div class="bento-grid">
            <div class="bento-card colspan-full fade-up">
                <h4>Team Members</h4>
                <p style="color:var(--text-muted); margin-bottom:20px;">Active lab members and clearance levels (42 total)</p>
                
                <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0; display:flex; align-items:center; gap:16px;">
                        <img src="assets/uifaces-popular-avatar (4).webp" style="width:52px; height:52px; border-radius:50%; object-fit:cover; border:2px solid #10b981;">
                        <div style="flex:1;">
                            <strong>Dr. Meera Iyer</strong><br>
                            <small style="color:var(--text-muted);">Principal Investigator - Longevity Project • Level 5 Clearance</small>
                        </div>
                        <p class="tag tag-active">Active</p>
                          <a href="404.html" class="report-btn">Report</a>
                    </div>

                    

                    <div style="padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0; display:flex; align-items:center; gap:16px;">
                        <img src="assets/uifaces-popular-avatar (5).webp" style="width:52px; height:52px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Ananya Bose</strong><br>
                            <small style="color:var(--text-muted);">Molecular Biologist • Level 3 Clearance</small>
                        </div>
                       <p class="tag tag-active">Active</p>
                         <a href="404.html" class="report-btn">Report</a>
                    </div>

                    <div style="padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0; display:flex; align-items:center; gap:16px;">
                        <img src="assets/uifaces-popular-avatar (3).webp" style="width:52px; height:52px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Rohan Menon</strong><br>
                            <small style="color:var(--text-muted);">Sequencing Technician • Level 2 Clearance</small>
                        </div>
                        <p class="tag tag-active">On Duty</p>
                          <a href="404.html" class="report-btn">Report</a>
                    </div>

                    <div style="padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0; display:flex; align-items:center; gap:16px;">
                        <img src="assets/img_team.webp" style="width:52px; height:52px; border-radius:50%; object-fit:cover;">
                        <div style="flex:1;">
                            <strong>Dr. Priya Sharma</strong><br>
                            <small style="color:var(--text-muted);">Head of Research • Level 5 Clearance</small>
                        </div>
                     <p class="tag tag-active">Active</p>
                       <a href="404.html" class="report-btn">Report</a>
                    </div>
                </div>
            </div>
        </div>`,

    sequencing: `
        <div class="bento-grid">
            <div class="bento-card fade-up" style="grid-column: span 2;">
                <h4>Sequence Quality Trends</h4>
                <div class="chart-wrapper">
                    <canvas id="seqLineChart"></canvas>
                </div>
            </div>
            <div class="bento-card fade-up" style="grid-column: span 2;">
                <h4>Genome Variants Found</h4>
                <div class="chart-wrapper">
                    <canvas id="seqPieChart"></canvas>
                </div>
            </div>

            <!-- Additional scrollable sequencing content -->
            <div class="bento-card fade-up colspan-full" style="margin-top:20px;">
                <h3>Recent Sequencing Runs</h3>
                <div style="margin-top:16px; display:flex; flex-direction:column; gap:16px;">
                    <div style="padding:18px; background:#f8fafc; border-radius:16px;">
                        <strong>Run ID: SEQ-20260328-047</strong><br>
                        <small style="color:var(--text-muted);">Whole Genome Sequencing • 142 GB • Coverage: 98.7x • Status: <span style="color:#10b981;">Completed</span></small>
                    </div>
                    <div style="padding:18px; background:#f8fafc; border-radius:16px;">
                        <strong>Run ID: SEQ-20260328-048</strong><br>
                        <small style="color:var(--text-muted);">RNA-Seq • Progress: 67% • Status: <span style="color:#f59e0b;">Processing</span></small>
                    </div>
                </div>
            </div>
        </div>`,

    settings: `<div class="bento-card fade-up"><h4>System Nodes</h4><p>Security configuration and Neural Keys active.</p></div>`
};

function showData(type, btn) {
    document.querySelectorAll('.nav-link, .mobile-link').forEach(l => l.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const container = document.getElementById('dynamicContent');
    if (!container) return;
    container.innerHTML = views[type] || views['overview'];

    const titleMap = {
        overview: "Admin Dashboard",
        research: "Research Projects",
        sequencing: "Genetic Sequencing",
        staff: "Staff Directory",
        employees: "Employee Hub",
        teams: "Project Teams",
        members: "Member Management"
    };
    const titleEl = document.getElementById("pageTitle");
    if (titleEl) titleEl.innerText = titleMap[type] || "Dashboard";

    if (type === 'overview') {
        setTimeout(() => renderChart('lineChart', 'line', ['Jan', 'Feb', 'Mar', 'Apr'], [65, 80, 95, 125], '#10b981'), 100);
    } else if (type === 'research') {
        setTimeout(() => renderChart('barChart', 'bar', ['Study A', 'Study B', 'Study C'], [85, 42, 67], '#10b981'), 100);
    } else if (type === 'sequencing') {
        setTimeout(() => {
            renderChart('seqLineChart', 'line', ['Wk1', 'Wk2', 'Wk3', 'Wk4'], [92, 98, 94, 99], '#0ea5e9');
            renderChart('seqPieChart', 'pie', ['Type A', 'Type B'], [60, 40], ['#10b981', '#0ea5e9']);
        }, 100);
    }
}

function renderChart(id, type, labels, data, colors) {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    // Destroy old chart if exists (prevents stacking issues)
    if (ctx.chartInstance) {
        ctx.chartInstance.destroy();
    }

    ctx.chartInstance = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: Array.isArray(colors) ? "#fff" : colors,
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 10
            },
            plugins: {
                legend: {
                    display: type !== "line" && type !== "bar"
                }
            },
            scales: type !== "pie" ? {
                x: {
                    ticks: { autoSkip: true, maxTicksLimit: 6 }
                },
                y: {
                    beginAtZero: true
                }
            } : {}
        },
    });
}

function loadUserData() {
    const roleEl = document.getElementById("userRole");
    const emailEl = document.getElementById("userEmail");
    const avatarEl = document.getElementById("userAvatar");

    if (roleEl) roleEl.textContent = "Director";
    if (emailEl) emailEl.textContent = "vance@neogenix.bio";
    if (avatarEl) {
        avatarEl.src = "assets/uifaces-popular-avatar (4).webp";
        avatarEl.style.objectFit = "cover";
    }
}

const originalShowData = showData;
showData = function (type, btn) {
    originalShowData(type, btn);
};

function logout() { window.location.href = "login.html"; }

window.onload = () => {
    showData('overview', document.querySelector('.nav-link.active'));
    loadUserData();
    createMenuToggle();
};