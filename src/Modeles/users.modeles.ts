import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type userDocument = User & Document;

@Schema()
export class User{
@Prop({ required : true})
fullname :String;

@Prop({ required : true})
email:String;

@Prop({ required : true})
age : Number;
@Prop({ required : true})
country: String;
}
export const userSchema = SchemaFactory.createForClass(User);