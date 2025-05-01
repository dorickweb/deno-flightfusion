export const content: Record<string, string> = {
    "app-title": "Pluh Airlines",
    "app-header": "Welcome to Pluh Airlines",
    "planes-header": "All Available Planes for Pluh Airlines",
    "airports-header": "All Available Airports for Pluh Airlines",
    "about-title": "About Pluh Airlines",
    "airports-about-p1":
    "At Aeris Skyways, we believe that the journey should be just as extraordinary as the destination. Founded with a passion for exploration and a commitment to redefining modern air travel, Aeris Skyways has quickly become a trusted name for travelers seeking comfort, reliability, and a sense of wonder in every flight.",
    "airports-about-p2": "Aeris Skyways was born from a simple idea: connect people to the world with care, creativity, and innovation. From our first takeoff, we've focused on making air travel more human — blending cutting-edge technology with genuine hospitality. Today, we proudly serve over 100 destinations across five continents, offering experiences that are memorable from check-in to landing.",
    "airports-about-p3": "Our mission is to inspire travel that connects cultures, families, and dreams. We are committed to providing a seamless and personalized flying experience that puts passengers at the heart of everything we do.",
    "airports-about-p4": "Aeris Skyways operates one of the youngest and most efficient fleets in the sky, featuring next-generation aircraft designed for comfort, efficiency, and environmental responsibility. Whether you're flying across the country or across the globe, you can count on state-of-the-art amenities and unmatched service",
    "airports-about-p5": "As we look ahead, Aeris Skyways is committed to shaping the future of travel. From investing in sustainable aviation fuels to expanding our network of destinations, we are excited to continue soaring higher — with you.",
    "home-weather": "Current Weather",
};

export function getContent(key: string): string {
  return content[key] ?? "";
}
