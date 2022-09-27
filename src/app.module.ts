import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    JogadoresModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
