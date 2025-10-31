import https from 'https';
import http from 'http';

/**
 * @desc    Get favicon for a website URL
 * @route   GET /api/brand/favicon?url=...
 * @access  Private
 */
export const getFavicon = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: 'URL parameter is required',
      });
    }

    // Parse and validate URL
    let domain;
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
      domain = urlObj.hostname;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Invalid URL format',
      });
    }

    // List of common favicon locations to try
    const faviconUrls = [
      `https://${domain}/favicon.ico`,
      `https://${domain}/favicon.png`,
      `https://${domain}/apple-touch-icon.png`,
      `https://${domain}/apple-touch-icon-precomposed.png`,
      `http://${domain}/favicon.ico`,
      // Fallback to Google's favicon service
      `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
    ];

    // Function to check if favicon exists
    const checkFavicon = (faviconUrl) => {
      return new Promise((resolve) => {
        const protocol = faviconUrl.startsWith('https://') ? https : http;
        
        protocol.get(faviconUrl, { timeout: 3000 }, (response) => {
          if (response.statusCode === 200) {
            resolve(faviconUrl);
          } else {
            resolve(null);
          }
        }).on('error', () => {
          resolve(null);
        }).on('timeout', () => {
          resolve(null);
        });
      });
    };

    // Try each favicon URL
    let foundFavicon = null;
    for (const faviconUrl of faviconUrls) {
      foundFavicon = await checkFavicon(faviconUrl);
      if (foundFavicon) break;
    }

    if (foundFavicon) {
      res.status(200).json({
        success: true,
        faviconUrl: foundFavicon,
        domain,
      });
    } else {
      // Return Google's favicon service as ultimate fallback
      res.status(200).json({
        success: true,
        faviconUrl: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
        domain,
        fallback: true,
      });
    }
  } catch (error) {
    console.error('Error fetching favicon:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching favicon',
      error: error.message,
    });
  }
};
