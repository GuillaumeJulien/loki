import { Controller , Get} from '@nestjs/common';

@Controller('torrents')
export class TorrentsController {
  @Get()
  findAll(): string {
    return 'All';
  }
}
