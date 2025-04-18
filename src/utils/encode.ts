export function decodeJwt(token: string) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) {
          throw new Error('Invalid token format');
        }
        const header = JSON.parse(atob(parts[0]));
        const payload = JSON.parse(atob(parts[1]));
        return {
          header: header,
          payload: payload
        };
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
}