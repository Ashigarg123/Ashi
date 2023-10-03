const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">projects</span>,  <span class="code">experience</span>, <span class="code">education</span>, <span class="code">articles</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "- Computer Science Engineer and Cybersecurity researcher.<br> - Believes in automating mundane tasks. <br> - Believes in developing systems that are innovative as well as safe to humanity. <br>- Interested in research area: AI, machine learning and cybersecurity ",
  skills:
    "Python | Linux shell | AWS | Web penetration testing | Django | HTML | CSS | Javascript | Data Structures | AI | ML",
  education:
    "Diploma in Network Security <br> B.Tech in Computer Engineering",
  experience:'<span class="code"></span>- 3 months internship as Cybersecurity Analyst trainee- Pristine Infosolutions<br>- 2 months virtual internship in cybersecurity - Verzeo <br>Served 2 months as Marketing and sales intern - The Climber<br>- 3 months Campus Ambassador- Trell<br>',
  certifications: 
    "AWS Security Specialty <br>AWS Developer Associate <br>CPTE - Certified penetration testing expert <br>CNSS by ICSI (International Cybersecurity Institute)",
  articles:
  "<a href='https://www.twilio.com/blog/passwordless-authentication-system-django-twilio-verify-sendgrid' class='success link'>(July 2022) - Twilio - Build a Passwordless Authentication System Using Django, Twilio Verify, and SendGrid</a>",
  "<a href='https://ash56sciencefreaks.hashnode.dev/image-to-text-conversion-and-object-detection-using-amazon-rekognition-and-python' class='success link'>(Sept 2021) - Hashnode - Image to text and object detection</a>",
  "<a href='https://www.geeksforgeeks.org/amazon-s3-cross-region-replication/' class='success link'>Hashnode - (Feb 2022) - GeeksforGeeks - Amazon S3 cross-region replication</a>",
  "<a href='https://www.geeksforgeeks.org/amazon-web-services-introduction-to-cloudfront-cdn/' class='success link'>(June 2022) - GeeksforGeeks - AWS - Introduction to Cloudfront CDN</a>",
  "<a href='https://www.geeksforgeeks.org/bash-script-define-bash-variables-and-its-types/' class='success link'>(Mar 2022) - GeeksforGeeks - Bash script - define bash variables and its types</a>",
  "<a href='https://www.geeksforgeeks.org/shell-scripting-readonly-command/' class='success link'>(Mar 2022) - GeeksforGeek- Shell script - readonly command</a>",
  "<a href='https://www.geeksforgeeks.org/how-to-install-python-packages-for-aws-lambda-layers/' class='success link'> (Mar 2022) - GeeksforGeeks - How to install Python packages for AWS Lambda layers</a>",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/ashi-garg-13b86b165/' class='success link'>Linkedin</a>, <a href='mailto:tanishkaashi567@gmail.com' class='success link'>Email</a>, <a href='https://twitter.com/Tanishkaashi/' class='success link'>Twitter</a>",
    projects:
    "- PingMe(Chat app) <br> - Tic-Tac-Toe (Using Minmax algo and python)<br>- Knights <br>- relaxn_shop <br>- All about Penguin <br> - Auction site <br> - Wikipedia like encyclopedia<br> - Social media site <br> - Attendance management system using QR code<br><a href='https://youtube.com/channel/UCkdhxjrhgaRcitLLShRyYyw' class='success link'> Find demo of some of my projects here- Youtube </a> <br> <a href='https://github.com/Ashigarg123' class='success link'> Find source code here: github </a> "

};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
