/**
 * MCP Server Directory - Server Submission Form Handler
 */

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('server-submission-form');

  if (!form) return;

  // Initialize feature count
  const featureCount = document.getElementById('feature-count');
  if (featureCount) {
    const checkedFeatures = document.querySelectorAll('input[name="server-features[]"]:checked');
    featureCount.textContent = `${checkedFeatures.length}/3 selected`;

    // Initialize checkbox states
    updateCheckboxStates();
  }

  // Function to update checkbox states based on selection count
  function updateCheckboxStates() {
    const checkedFeatures = document.querySelectorAll('input[name="server-features[]"]:checked');
    const allFeatureCheckboxes = document.querySelectorAll('input[name="server-features[]"]');

    if (checkedFeatures.length >= 3) {
      // Disable all unchecked checkboxes
      allFeatureCheckboxes.forEach(checkbox => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
          checkbox.parentNode.classList.add('opacity-50');
        }
      });
    } else {
      // Enable all checkboxes
      allFeatureCheckboxes.forEach(checkbox => {
        checkbox.disabled = false;
        checkbox.parentNode.classList.remove('opacity-50');
      });
    }
  }

  // Form validation and submission
  form.addEventListener('submit', function(event) {
    // Don't prevent default form submission - let Netlify handle it
    // event.preventDefault();

    // Basic validation
    const requiredFields = [
      'server-name',
      'server-description',
      'server-category'
    ];

    let isValid = true;

    // Check required fields
    requiredFields.forEach(field => {
      const input = document.getElementById(field);
      if (!input) return;

      const value = input.value.trim();

      if (!value) {
        isValid = false;
        input.classList.add('border-red-500');

        // Add error message if it doesn't exist
        let errorMsg = input.parentNode.querySelector('.error-message');
        if (!errorMsg) {
          errorMsg = document.createElement('p');
          errorMsg.className = 'error-message text-red-500 text-sm mt-1';
          errorMsg.textContent = 'This field is required';
          input.parentNode.appendChild(errorMsg);
        }
      } else {
        input.classList.remove('border-red-500');

        // Remove error message if it exists
        const errorMsg = input.parentNode.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      }
    });

    // Check server logo file if one is selected
    const logoInput = document.getElementById('server-logo');
    if (logoInput && logoInput.files.length > 0) {
      const file = logoInput.files[0];

      // Check if it's an image
      if (!file.type.match('image.*')) {
        isValid = false;
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-message text-red-500 text-sm mt-1';
        errorMsg.textContent = 'Please select a valid image file';
        logoInput.parentNode.appendChild(errorMsg);
      }

      // Check file size (max 2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        isValid = false;
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error-message text-red-500 text-sm mt-1';
        errorMsg.textContent = 'Logo file size must be less than 2MB';
        logoInput.parentNode.appendChild(errorMsg);
      }
    }

    // Check if at least one feature is selected
    const featuresChecked = document.querySelectorAll('input[name="server-features[]"]:checked');
    if (featuresChecked.length === 0) {
      isValid = false;
      const featuresContainer = document.querySelector('label[for="server-features"]').parentNode;

      // Add error message if it doesn't exist
      let errorMsg = featuresContainer.querySelector('.error-message');
      if (!errorMsg) {
        errorMsg = document.createElement('p');
        errorMsg.className = 'error-message text-red-500 text-sm mt-1';
        errorMsg.textContent = 'Please select at least one feature';
        featuresContainer.appendChild(errorMsg);
      }
    } else if (featuresChecked.length > 3) {
      isValid = false;
      const featuresContainer = document.querySelector('label[for="server-features"]').parentNode;

      // Add error message if it doesn't exist
      let errorMsg = featuresContainer.querySelector('.error-message');
      if (!errorMsg) {
        errorMsg = document.createElement('p');
        errorMsg.className = 'error-message text-red-500 text-sm mt-1';
        errorMsg.textContent = 'Please select at most 3 features';
        featuresContainer.appendChild(errorMsg);
      }
    } else {
      const featuresContainer = document.querySelector('label[for="server-features"]').parentNode;

      // Remove error message if it exists
      const errorMsg = featuresContainer.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }

    // If form is not valid, prevent submission
    if (!isValid) {
      event.preventDefault();

      // Scroll to the first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Show loading state
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...';

      // Let Netlify handle the form submission
      // The page will be redirected to the success page
    }
  });

  // Clear validation errors when user starts typing
  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('border-red-500');
      const errorMsg = this.parentNode.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    });
  });

  // Handle checkbox change
  const mcpConfirmation = document.getElementById('mcp-confirmation');
  mcpConfirmation.addEventListener('change', function() {
    const label = this.parentNode;
    if (this.checked) {
      label.classList.remove('text-red-500');
      const errorMsg = label.parentNode.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    }
  });

  // Handle feature checkboxes change
  document.querySelectorAll('input[name="server-features[]"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const featuresContainer = document.querySelector('label[for="server-features"]').parentNode;
      const errorMsg = featuresContainer.querySelector('.error-message');
      const featureCount = document.getElementById('feature-count');
      const checkedFeatures = document.querySelectorAll('input[name="server-features[]"]:checked');
      const maxAllowed = 3;

      // If more than 3 features are selected, uncheck the current one
      if (checkedFeatures.length > maxAllowed) {
        this.checked = false;

        // Show a temporary message
        const maxMessage = document.createElement('p');
        maxMessage.className = 'text-amber-600 text-xs mt-1 max-features-message';
        maxMessage.textContent = 'Maximum of 3 features allowed';

        // Remove any existing max message
        const existingMaxMessage = featuresContainer.querySelector('.max-features-message');
        if (existingMaxMessage) {
          existingMaxMessage.remove();
        }

        featuresContainer.appendChild(maxMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
          maxMessage.remove();
        }, 3000);
      }

      // Update the feature count display (after potential unchecking)
      const updatedCheckedFeatures = document.querySelectorAll('input[name="server-features[]"]:checked');
      featureCount.textContent = `${updatedCheckedFeatures.length}/${maxAllowed} selected`;

      // If at least one checkbox is checked, remove the error message
      if (updatedCheckedFeatures.length > 0) {
        if (errorMsg) {
          errorMsg.remove();
        }
      }

      // Update checkbox states
      updateCheckboxStates();
    });
  });
});

// Function to copy server address to clipboard
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

// Function to copy server URL to clipboard
function copyServerUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(function() {
    // Show a temporary tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'fixed bg-black text-white px-2 py-1 rounded text-sm z-50';
    tooltip.style.top = (event.clientY - 40) + 'px';
    tooltip.style.left = event.clientX + 'px';
    tooltip.textContent = 'Server URL copied!';
    document.body.appendChild(tooltip);

    // Remove tooltip after 2 seconds
    setTimeout(() => {
      tooltip.remove();
    }, 2000);
  }).catch(function(err) {
    console.error('Could not copy text: ', err);
  });
}
