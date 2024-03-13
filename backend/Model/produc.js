const { object } = require("joi");
const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema } = mongoose;
(options = {
  separator: "-",
  lang: "en",
  //   truncate: 120,
}),
  mongoose.plugin(slug, options);

const producSchema = new Schema(
  {
    sttProduct: { type: Number },
    title: { type: String }, //tiêu đề
    body: { type: String }, //mô tả
    codeProduc: { type: String },
    status: { type: Boolean, default: "false" }, // true thì active fault thì noactive
    quantity: { type: Number }, // số lượng
    price: { type: String }, // giá
    gender: { type: String },
    tradeMark: { type: String }, // nhãn hiệu
    category: { type: String }, // hạng mục, phân loạifv
    bestSeller: { type: Number, default: 0 }, // giảm giá
    totalProduc: { type: Number }, //tổng sản phẩm
    tags: [Object],
    view: { type: Number }, //lượt xem
    comment: { type: Schema.Types.ObjectId, ref: "comment" },
    postImage: [Object], // list hình ảnh
    samples_id: [{ type: Schema.Types.ObjectId, ref: "sample" }], //mẫu mã
    slug: { type: String, slug: "title", unique: false },
    slug_1: { type: String, slug: "gender", unique: false },
    slug_2: { type: String, slug: "category", unique: false },
    slug_3: { type: String, slug: ["title", "sttProduct"], unique: false },
  },
  {
    timestamps: true,
  }
);
producSchema.plugin(AutoIncrement, {
  inc_field: "sttProduct",
});

// producSchema.statics.isTitleInProduc = async function (title) {
//   if (!title) throw new Error("invalid title");
//   try {
//     const titles = await this.findOne({ title });
//     if (titles) return false;
//     return true;
//   } catch (error) {
//     console.log("error inside isThisEmailInUse method", error.message);
//     return false;
//   }
// };

module.exports = mongoose.model("produc", producSchema);
