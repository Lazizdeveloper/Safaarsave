export class BookingLockService {
  constructor(private readonly redisClient: any) {}
  async acquireLock(roomId: string, ttlSeconds = 600): Promise<boolean> {
    const key = `lock:room:${roomId}`;
    const result = await this.redisClient.set(key, 'LOCKED', 'EX', ttlSeconds, 'NX');
    return result === 'OK';
  }
  async releaseLock(roomId: string): Promise<void> {
    await this.redisClient.del(`lock:room:${roomId}`);
  }
}
