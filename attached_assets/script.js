document.addEventListener('DOMContentLoaded', () => {
  // Wallet Animation Logic - REMOVED as per new requirements
  /*
  const walletNames = [
    'MetaMask',
    'Phantom',
    'Exodus',
    'Electrum',
    'BlueWallet',
    'BitPay',
    'Trust Wallet',
    'Ledger Live',
    'Trezor Suite',
    'Unisat',
    'Rabby',
    'Atomic Wallet',
    'Coinomi',
    'Edge',
    'Wasabi',
    'Sparrow',
    'Specter Desktop',
    'Bitcoin Core',
    'Coinbase Wallet', 
    'MyEtherWallet'    
  ];
  const walletNameElement = document.getElementById('wallet-name');
  let currentWalletIndex = 0;

  if (walletNameElement) {
    setInterval(() => {
      walletNameElement.style.opacity = 0;
      setTimeout(() => {
        currentWalletIndex = (currentWalletIndex + 1) % walletNames.length;
        walletNameElement.textContent = walletNames[currentWalletIndex];
        walletNameElement.style.opacity = 1;
      }, 500); 
    }, 2000); 
  }
  */

  // Beta Download/Troubleshooting Section Logic - REMOVED as the section is now always visible
  /*
  const mainDownloadButtons = document.querySelectorAll('.download-beta-header, .download-beta-hero');
  const troubleshootingSection = document.querySelector('.post-download-info'); // Updated selector if it changed

  if (mainDownloadButtons.length > 0 && troubleshootingSection) {
    mainDownloadButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        troubleshootingSection.style.display = 'block';
        // troubleshootingSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  */

  // Show post-download info when main download button is clicked
  const mainDownloadButton = document.getElementById('main-download-button');
  const postDownloadSection = document.getElementById('post-download-section');

  if (mainDownloadButton && postDownloadSection) {
    mainDownloadButton.addEventListener('click', () => {
      // We don't event.preventDefault() here because we want the download to start.
      // This will show the section immediately after the download is initiated.
      postDownloadSection.style.display = 'block';
      // Consider scrolling to it if it's not immediately visible after button click
      // postDownloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Wallet List Modal Logic
  const walletListModal = document.getElementById('wallet-list-modal');
  const openModalLinks = document.querySelectorAll('#full-wallet-list-link, #faq-full-wallet-list-link');
  const closeModalButton = document.getElementById('close-modal-button');

  function openModal() {
    if (walletListModal) {
      walletListModal.style.display = 'flex'; // Use flex to enable centering defined in CSS
    }
  }

  function closeModal() {
    if (walletListModal) {
      walletListModal.style.display = 'none';
    }
  }

  openModalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  // Close modal if user clicks outside of the modal-content
  window.addEventListener('click', (event) => {
    if (event.target === walletListModal) {
      closeModal();
    }
  });

  // Close modal on "Escape" key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && walletListModal && walletListModal.style.display === 'flex') {
      closeModal();
    }
  });

  // Terminal command copy functionality
  const copyButton = document.getElementById('copy-command-button');
  const commandTextElement = document.getElementById('terminal-command-text');
  const copyFeedback = document.getElementById('copy-feedback');

  if (copyButton && commandTextElement) {
    copyButton.addEventListener('click', () => {
      const commandToCopy = commandTextElement.textContent;
      navigator.clipboard
        .writeText(commandToCopy)
        .then(() => {
          if (copyFeedback) {
            copyFeedback.textContent = 'Copied!';
            copyFeedback.style.opacity = '1';
            setTimeout(() => {
              copyFeedback.style.opacity = '0';
              copyFeedback.textContent = ''; // Clear text after fade out
            }, 2000);
          }
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
          if (copyFeedback) {
            copyFeedback.textContent = 'Failed to copy';
            copyFeedback.style.opacity = '1';
            setTimeout(() => {
              copyFeedback.style.opacity = '0';
              copyFeedback.textContent = '';
            }, 2000);
          }
        });
    });
  }

  // Smooth scroll for internal navigation links
  const internalNavLinks = document.querySelectorAll(
    '.nav-links a[href^="#"], a.contact-link[href^="#"]:not(#full-wallet-list-link):not(#faq-full-wallet-list-link)'
  );
  internalNavLinks.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      // Ensure it's a valid internal link before preventing default and scrolling
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    });
  });
});
