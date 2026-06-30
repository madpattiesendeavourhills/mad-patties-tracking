const DEFAULT_ROUTE = "/";
const REDIRECT_DELAY_MS = 900;

function normalisePath(pathname) {
  let path = pathname.toLowerCase().replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

function sendAnalytics(routeKey, route) {
  const eventData = {
    qr_path: routeKey,
    qr_name: route.name,
    campaign: route.campaign,
    destination_url: route.url
  };

  if (typeof gtag === "function") {
    gtag("event", "qr_redirect", eventData);
  }
}

async function startRedirect() {
  const title = document.getElementById("title");
  const message = document.getElementById("message");
  const manualLink = document.getElementById("manualLink");

  try {
    const response = await fetch("/routes.json", { cache: "no-store" });
    const routes = await response.json();

    const routeKey = normalisePath(window.location.pathname);
    const route = routes[routeKey] || routes[DEFAULT_ROUTE];

    title.textContent = route.name || "Mad Patties";
    message.textContent = "Redirecting now...";
    manualLink.href = route.url;

    sendAnalytics(routeKey, route);

    setTimeout(() => {
      window.location.href = route.url;
    }, REDIRECT_DELAY_MS);
  } catch (error) {
    title.textContent = "Something went wrong";
    message.textContent = "Please use the button below to continue.";
    manualLink.href = "https://order.online/store/mad-patties-endeavour-hills-23013986";
  }
}

startRedirect();
