// Common JavaScript Functions for ServiceNow Exam Guide

// Toggle Answer Visibility
function toggleAnswer(questionId) {
    const answerSection = document.getElementById(questionId);
    const toggleBtn = document.querySelector(`[onclick="toggleAnswer('${questionId}')"]`);
    
    if (answerSection.classList.contains('hide')) {
        answerSection.classList.remove('hide');
        answerSection.classList.add('show');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="ti ti-eye-off me-1"></i>Hide Answer';
        }
    } else {
        answerSection.classList.add('hide');
        answerSection.classList.remove('show');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="ti ti-eye me-1"></i>Show Answer';
        }
    }
}

// Show All Answers
function showAllAnswers() {
    const answerSections = document.querySelectorAll('.answer-section');
    answerSections.forEach(section => {
        section.classList.remove('hide');
        section.classList.add('show');
    });
    
    const toggleBtns = document.querySelectorAll('.toggle-answer');
    toggleBtns.forEach(btn => {
        btn.innerHTML = '<i class="ti ti-eye-off me-1"></i>Hide Answer';
    });
}

// Hide All Answers
function hideAllAnswers() {
    const answerSections = document.querySelectorAll('.answer-section');
    answerSections.forEach(section => {
        section.classList.add('hide');
        section.classList.remove('show');
    });
    
    const toggleBtns = document.querySelectorAll('.toggle-answer');
    toggleBtns.forEach(btn => {
        btn.innerHTML = '<i class="ti ti-eye me-1"></i>Show Answer';
    });
}

// Copy Code to Clipboard
function copyCode(buttonElement) {
    const codeBlock = buttonElement.closest('.code-editor').querySelector('pre');
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="ti ti-check me-1"></i>Copied!';
        buttonElement.style.background = 'rgba(46, 179, 68, 0.2)';
        buttonElement.style.borderColor = 'rgba(46, 179, 68, 0.5)';
        
        setTimeout(() => {
            buttonElement.innerHTML = originalText;
            buttonElement.style.background = 'transparent';
            buttonElement.style.borderColor = 'rgba(255,255,255,0.3)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        buttonElement.innerHTML = '<i class="ti ti-x me-1"></i>Failed';
        setTimeout(() => {
            buttonElement.innerHTML = '<i class="ti ti-copy me-1"></i>Copy';
        }, 2000);
    });
}

// Syntax Highlighting (Simple)
function highlightCode() {
    const codeBlocks = document.querySelectorAll('.code-editor-body pre');
    
    codeBlocks.forEach(block => {
        let code = block.innerHTML;
        
        // Comments
        code = code.replace(/\/\/(.*?)(\n|$)/g, '<span class="comment">//$1</span>$2');
        code = code.replace(/\/\*(.*?)\*\//gs, '<span class="comment">/*$1*/</span>');
        
        // Strings
        code = code.replace(/'([^']*?)'/g, '<span class="string">\'$1\'</span>');
        code = code.replace(/"([^"]*?)"/g, '<span class="string">"$1"</span>');
        
        // Keywords
        const keywords = ['var', 'let', 'const', 'function', 'return', 'if', 'else', 'for', 'while', 
                         'do', 'switch', 'case', 'break', 'continue', 'new', 'try', 'catch', 
                         'throw', 'finally', 'true', 'false', 'null', 'undefined', 'this'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            code = code.replace(regex, '<span class="keyword">$1</span>');
        });
        
        // Numbers
        code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
        
        // Functions and Methods
        code = code.replace(/(\w+)(?=\()/g, '<span class="function">$1</span>');
        
        block.innerHTML = code;
    });
}

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    // Apply syntax highlighting
    highlightCode();
    
    // Initialize all answers as hidden
    hideAllAnswers();
    
    // Add smooth scroll to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add back to top button functionality
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Track progress
    updateProgress();
});

// Update Progress Bar
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    
    const totalQuestions = document.querySelectorAll('.question-card').length;
    const answeredQuestions = document.querySelectorAll('.answer-section.show').length;
    const progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
    
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
}

// Print Page
function printPage() {
    window.print();
}

// Search Functionality
function searchQuestions(searchTerm) {
    const questions = document.querySelectorAll('.question-card');
    const term = searchTerm.toLowerCase();
    
    questions.forEach(question => {
        const text = question.textContent.toLowerCase();
        if (text.includes(term)) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
}

// Filter by Exam Type
function filterByExam(examType) {
    const questions = document.querySelectorAll('.question-card');
    
    questions.forEach(question => {
        if (examType === 'all') {
            question.style.display = 'block';
        } else {
            const badge = question.querySelector('.exam-badge');
            if (badge && badge.classList.contains(examType)) {
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
            }
        }
    });
}

// Run Code Example (Simulated)
function runCode(exampleId) {
    const outputDiv = document.getElementById(exampleId + '-output');
    if (outputDiv) {
        outputDiv.style.display = 'block';
        outputDiv.classList.add('alert', 'alert-info');
        outputDiv.innerHTML = '<strong>Note:</strong> This is a simulated output. Run this code in your ServiceNow instance to see actual results.';
    }
}

// Initialize Tooltips (if using Bootstrap/Tabler tooltips)
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Export data as JSON for study tracking
function exportProgress() {
    const progress = {
        timestamp: new Date().toISOString(),
        totalQuestions: document.querySelectorAll('.question-card').length,
        answeredQuestions: document.querySelectorAll('.answer-section.show').length,
        currentPage: document.title
    };
    
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'study-progress.json';
    link.click();
    URL.revokeObjectURL(url);
}
