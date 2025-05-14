export const convertYouTubeLink = (url: string): string => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    if (!match || match.length < 2) return "";

    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
}