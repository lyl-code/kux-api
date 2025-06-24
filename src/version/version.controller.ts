import { Controller, Get } from '@nestjs/common';

@Controller('version')
export class VersionController {
  @Get('easy-pack')
  getVersion(): string {
    return '1.0.35';
  }
}
