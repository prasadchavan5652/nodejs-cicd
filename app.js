const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>CI/CD Pipeline - PC</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{

height:100vh;
display:flex;
justify-content:center;
align-items:center;

background:linear-gradient(135deg,#081229,#10254d,#1b1464);

}

.card{

width:900px;
padding:40px;

background:rgba(255,255,255,0.12);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.25);

border-radius:25px;

box-shadow:
0 25px 60px rgba(0,0,0,.6),
0 0 25px rgba(0,255,255,.2);

transform:perspective(1200px) rotateX(6deg);

color:white;

text-align:center;

}

h1{

font-size:42px;

color:#00E5FF;

text-shadow:0 0 15px cyan;

margin-bottom:10px;

}

h2{

font-size:25px;

color:#90EE90;

margin-bottom:20px;

}

.steps{

display:flex;

justify-content:space-around;

margin-top:30px;

}

.step{

background:#1E3A8A;

padding:15px;

border-radius:15px;

width:180px;

box-shadow:0 10px 20px rgba(0,0,0,.4);

}

.step h3{

color:#FFD700;

margin-bottom:10px;

}

.footer{

margin-top:35px;

font-size:22px;

color:#00E5FF;

font-weight:bold;

}

.points{

margin-top:30px;

text-align:left;

font-size:18px;

line-height:35px;

}

</style>

</head>

<body>

<div class="card">

<h1>🚀 DevOps CI/CD Pipeline</h1>

<h2>Node.js Application Successfully Deployed</h2>

<div class="steps">

<div class="step">
<h3>📂 GitHub</h3>
<p>Code Push</p>
</div>

<div class="step">
<h3>⚙️ Jenkins</h3>
<p>Build & Test</p>
</div>

<div class="step">
<h3>🐳 Docker</h3>
<p>Create Image</p>
</div>

<div class="step">
<h3>☁️ Deploy</h3>
<p>Run Container</p>
</div>

</div>

<div class="points">

✅ Source Code Pulled from GitHub<br>

✅ Jenkins Pipeline Triggered<br>

✅ Build Completed Successfully<br>

✅ Test Passed Successfully<br>

✅ Docker Image Created<br>

✅ Docker Container Running<br>

✅ Application Available on Port 3000

</div>

<div class="footer">

👨‍💻 CI/CD Project Done by <span style="color:#FFD700;">Pranit Tambade</span>

<br><br>

Linux | Git | GitHub | Jenkins | Docker | Node.js

</div>

</div>

</body>
</html>
`);
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});
