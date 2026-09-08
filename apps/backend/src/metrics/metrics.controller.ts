import { Controller, Get } from '@nestjs/common';

@Controller('metrics')
export class MetricsController {
  @Get()
  getMetrics(): string {
    return '# HELP safaar_booking_total Total bookings\n# TYPE safaar_booking_total counter\nsafaar_booking_total 1420\n';
  }
}
