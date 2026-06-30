Mad Patties QR Redirect System v1.0

How it works:
- All links load index.html first.
- Google Analytics tracks a qr_redirect event.
- The visitor redirects to the assigned destination after about 0.9 seconds.

To add a new QR code:
1. Open routes.json.
2. Add a new entry, for example:

  "/christmas": {
    "name": "Christmas QR",
    "campaign": "christmas",
    "url": "https://order.online/store/mad-patties-endeavour-hills-23013986"
  }

3. Re-upload/deploy the project.
4. Use the QR URL: https://mpendeavourhills.com.au/christmas

Google Analytics ID used:
G-QHWGDYYSF0
