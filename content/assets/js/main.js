/**
 * MCP Server Directory - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');

      // Toggle aria-expanded
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !expanded);

      // Toggle menu icon (hamburger/close)
      const menuOpenIcon = document.getElementById('menu-open');
      const menuCloseIcon = document.getElementById('menu-close');

      if (menuOpenIcon && menuCloseIcon) {
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
      }
    });
  }

  // Server filter functionality (for servers list page)
  const serverFilterForm = document.getElementById('server-filter-form');
  const serverCards = document.querySelectorAll('.server-card');

  if (serverFilterForm && serverCards.length > 0) {
    serverFilterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const versionFilter = document.getElementById('version-filter').value;
      const typeFilter = document.getElementById('type-filter').value;
      const searchFilter = document.getElementById('search-filter').value.toLowerCase();

      serverCards.forEach(card => {
        const serverVersion = card.dataset.version;
        const serverType = card.dataset.type;
        const serverName = card.dataset.name.toLowerCase();
        const serverDescription = card.dataset.description.toLowerCase();

        let showCard = true;

        // Apply version filter
        if (versionFilter && versionFilter !== 'all') {
          showCard = serverVersion === versionFilter;
        }

        // Apply type filter
        if (showCard && typeFilter && typeFilter !== 'all') {
          showCard = serverType === typeFilter;
        }

        // Apply search filter
        if (showCard && searchFilter) {
          showCard = serverName.includes(searchFilter) || serverDescription.includes(searchFilter);
        }

        // Show/hide card
        card.classList.toggle('hidden', !showCard);
      });

      // Show message if no results
      const noResultsMessage = document.getElementById('no-results-message');
      if (noResultsMessage) {
        const visibleCards = document.querySelectorAll('.server-card:not(.hidden)');
        noResultsMessage.classList.toggle('hidden', visibleCards.length > 0);
      }
    });

    // Reset filters
    const resetButton = document.getElementById('reset-filters');
    if (resetButton) {
      resetButton.addEventListener('click', function() {
        document.getElementById('version-filter').value = 'all';
        document.getElementById('type-filter').value = 'all';
        document.getElementById('search-filter').value = '';

        // Show all cards
        serverCards.forEach(card => {
          card.classList.remove('hidden');
        });

        // Hide no results message
        const noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) {
          noResultsMessage.classList.add('hidden');
        }
      });
    }
  }

  // Lightbox for screenshots
  const lightboxLinks = document.querySelectorAll('[data-lightbox]');

  if (lightboxLinks.length > 0) {
    lightboxLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        const imageUrl = this.getAttribute('href');
        const lightboxId = this.getAttribute('data-lightbox');

        openLightbox(imageUrl, lightboxId);
      });
    });
  }
});

// Function to open lightbox
function openLightbox(imageUrl, groupId) {
  // Create lightbox container
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90';

  // Create lightbox content
  lightbox.innerHTML = `
    <div class="relative max-w-4xl max-h-screen p-4">
      <button class="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img src="${imageUrl}" alt="Lightbox Image" class="max-w-full max-h-[80vh] object-contain">
    </div>
  `;

  // Add lightbox to body
  document.body.appendChild(lightbox);

  // Prevent scrolling on body
  document.body.style.overflow = 'hidden';

  // Close lightbox on click
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target.closest('button')) {
      closeLightbox(lightbox);
    }
  });

  // Close lightbox on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox(lightbox);
    }
  });
}

// Function to close lightbox
function closeLightbox(lightbox) {
  document.body.removeChild(lightbox);
  document.body.style.overflow = '';
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    // Show a temporary tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'fixed bg-black text-white px-2 py-1 rounded text-sm z-50';
    tooltip.style.top = (event.clientY - 40) + 'px';
    tooltip.style.left = event.clientX + 'px';
    tooltip.textContent = 'Copied!';
    document.body.appendChild(tooltip);

    // Remove tooltip after 2 seconds
    setTimeout(() => {
      tooltip.remove();
    }, 2000);
  }).catch(function(err) {
    console.error('Could not copy text: ', err);
  });
}
