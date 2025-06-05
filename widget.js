(function() {
    // Find all badge containers on the page
    const containers = document.querySelectorAll('.mini-gh-badge');
    if (!containers.length) return;
  
    // Inject CSS for the badge (default style)
    const style = document.createElement('style');
    style.textContent = `
      .mini-gh-badge-container {
        display: inline-flex;
        align-items: center;
        border: 2px solid #d1d5da;
        border-radius: 12px;
        padding: 8px 10px;
        background: #f6f8fa;
        font-family: 'Helvetica Neue', sans-serif;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        color: #24292e;
      }
      .mini-gh-badge-container:hover {
        transform: translateY(-2px);
      }
      .mini-gh-badge-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
        border: 2px solid #fff;
      }
      .mini-gh-badge-name {
        font-weight: 700;
        font-size: 1.1rem;
        margin-right: 14px;
        white-space: nowrap;
        overflow: hidden;
      }
      .mini-gh-badge-link {
        text-decoration: none;
        color: #0366d6;
        font-size: 0.95rem;
        padding: 4px 8px;
        border: 1px solid #0366d6;
        border-radius: 6px;
        transition: background 0.3s, color 0.3s;
      }
      .mini-gh-badge-link:hover {
        background: #0366d6;
        color: #fff;
      }
      /* When a gradient is applied, adjust text for contrast */
      .mini-gh-badge-container.gradient {
        color: #fff;
      }
      .mini-gh-badge-container.gradient .mini-gh-badge-link {
        color: #fff;
        border-color: #fff;
      }
      .mini-gh-badge-container.gradient .mini-gh-badge-link:hover {
        background: #ddd;
        color: #333;
      }
      /* Typewriter cursor */
      .cursor {
        display: inline-block;
        animation: blink 0.8s step-start infinite;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  
    // Preset gradient options
    const presetGradients = {
      "blue-purple": "linear-gradient(135deg, #667eea, #764ba2)",
      "red-orange": "linear-gradient(135deg, #f85032, #e73827)",
      "green": "linear-gradient(135deg, #56ab2f, #a8e063)",
      "sunset": "linear-gradient(135deg, #ff7e5f, #feb47b)",
      "ocean": "linear-gradient(135deg, #2b5876, #4e4376)"
    };
  
    // Escape HTML to prevent unwanted markup injection
    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    // Typewriter effect: types out text letter by letter and then loops
    function typeWriterEffect(element, text, speed) {
      let i = 0;
      function type() {
        if (i <= text.length) {
          element.innerHTML = escapeHtml(text.substring(0, i)) + '<span class="cursor">|</span>';
          i++;
          setTimeout(type, speed);
        } else {
          // Pause, then restart after 2 seconds
          setTimeout(() => {
            i = 0;
            type();
          }, 2000);
        }
      }
      type();
    }
  
    // Process each badge container
    containers.forEach(container => {
      const username = container.getAttribute('data-user') || 'octocat';
      const gradientOption = container.getAttribute('data-gradient');
      const borderOption = container.getAttribute('data-border');
      const typewriterEnabled = container.getAttribute('data-typewriter') === "true";
      const typewriterSpeed = parseInt(container.getAttribute('data-typewriter-speed')) || 150;
  
      // Create the badge container element
      const badge = document.createElement('div');
      badge.className = 'mini-gh-badge-container';
  
      // Apply gradient if provided
      if (gradientOption) {
        if (presetGradients[gradientOption]) {
          badge.style.background = presetGradients[gradientOption];
        } else if (gradientOption.trim().startsWith('linear-gradient')) {
          badge.style.background = gradientOption;
        } else {
          badge.style.background = gradientOption;
        }
        badge.classList.add('gradient');
      }
  
      // Apply custom border if provided
      if (borderOption) {
        badge.style.border = borderOption;
      }
  
      // Fetch GitHub user data
      fetch('https://api.github.com/users/' + encodeURIComponent(username))
        .then(response => response.json())
        .then(data => {
          if (!data || data.message === 'Not Found')
            throw new Error('User not found');
  
          // Avatar element
          const avatar = document.createElement('img');
          avatar.src = data.avatar_url;
          avatar.alt = `${username} avatar`;
          avatar.className = 'mini-gh-badge-avatar';
          badge.appendChild(avatar);
  
          // Name element (with optional typewriter effect)
          const nameEl = document.createElement('span');
          nameEl.className = 'mini-gh-badge-name';
          const displayName = data.name || username;
          if (typewriterEnabled) {
            typeWriterEffect(nameEl, displayName, typewriterSpeed);
          } else {
            nameEl.textContent = displayName;
          }
          badge.appendChild(nameEl);
  
          // Profile link element
          const link = document.createElement('a');
          link.className = 'mini-gh-badge-link';
          link.href = data.html_url;
          link.target = '_blank';
          link.textContent = 'View Profile';
          badge.appendChild(link);
  
          container.appendChild(badge);
        })
        .catch(() => {
          container.textContent = `Could not load GitHub user "${username}".`;
        });
    });
  })();
  