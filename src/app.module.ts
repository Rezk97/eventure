import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { UserModuleModule } from './user-module/user-module.module';
import { EventModuleModule } from './event-module/event-module.module';
import { TicketModuleModule } from './ticket-module/ticket-module.module';
import { PaymentModuleModule } from './payment-module/payment-module.module';
import { CheckInModuleModule } from './check-in-module/check-in-module.module';
import { AnalyticsModuleModule } from './analytics-module/analytics-module.module';
import { NotificationModuleModule } from './notification-module/notification-module.module';
import { SearchModuleModule } from './search-module/search-module.module';
import { DiscountModuleModule } from './discount-module/discount-module.module';
import { ReviewModuleModule } from './review-module/review-module.module';
import { WishlistModuleModule } from './wishlist-module/wishlist-module.module';

@Module({
  imports: [AuthModuleModule, UserModuleModule, EventModuleModule, TicketModuleModule, PaymentModuleModule, CheckInModuleModule, AnalyticsModuleModule, NotificationModuleModule, SearchModuleModule, DiscountModuleModule, ReviewModuleModule, WishlistModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
