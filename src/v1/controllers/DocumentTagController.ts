import { Request, Response } from 'express';
import connect from '../../database/connect';

import DocumentTagModel, { IDocumentTagModel } from '../models/DocumentTagModel';

class UrlController {
  constructor() {
    this.databaseConnect();
  }
  async databaseConnect() {
    return await connect();
  }


  async create(req: Request, res: Response) {
    const { documentId, tags } = req.body;

    if (!documentId || (!tags || tags.length == 0)) return res.boom.badRequest("parameters not valid");

    try {

      let documentTagModel: IDocumentTagModel | null = await DocumentTagModel.findOne({ documentId });

      if (documentTagModel) { return res.boom.badRequest("document already exists"); }


      let newDocumentTag: IDocumentTagModel = new DocumentTagModel({ documentId, tags });

      await newDocumentTag.save();
      return res.status(201).json(newDocumentTag);

    } catch (error) {
      console.error(error);
      return res.boom.badImplementation("some error occured", error);
    }
  }



  // async redirect(req: Request, res: Response) {
  //   const { shortId } = req.params;

  //   if (!shortId) return res.status(400).json({ msg: "id not provided" });

  //   try {
  //     const URL = await Url.findOne({ shortId });
  //     if (!URL) return res.status(400).json({ msg: "invalid url id" });

  //     await UrlAccess.create({ url: URL._id });

  //     return res.redirect(URL.url);
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ msg: "some error occured" });
  //   }
  // }

  // async redirectUrl(req: Request, res: Response) {
  //   const { shortId } = req.params;

  //   if (!shortId) return res.status(400).json({ msg: "id not provided" });

  //   try {
  //     const URL = await Url.findOne({ shortId });
  //     if (!URL) return res.status(400).json({ msg: "invalid url id" });

  //     await UrlAccess.create({ url: URL._id });

  //     return res.send(URL.url);
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ msg: "some error occured" });
  //   }
  // }

  // async create(req: Request, res: Response) {
  //   const { url } = req.body;

  //   if (!url) return res.status(400).json({ msg: "url not provided" });

  //   try {
  //     let site = await axios.head(url);
  //   } catch (error) {
  //     if (error.code == 'ENOTFOUND') {
  //       return res.status(400).json({ msg: "url not exists" });
  //     }
  //     if (error.code == 'ECONNREFUSED') {
  //       return res.status(400).json({ msg: "connection refused to url" });
  //     }
  //     // throw error;
  //   }

  //   try {

  //     let URL = await Url.findOne({ url });
  //     if (!URL) {
  //       let newURL = new Url({ url });

  //       let hasOne: IUrl | null = null;
  //       do {
  //         hasOne = await Url.findOne({ shortId: newURL.shortId });
  //         if (hasOne) {
  //           newURL.shortId = nanoid(10);
  //         }
  //       } while (!!hasOne)


  //       await newURL.save();
  //       return res.status(201).json({ shortId: newURL.shortId, url });
  //     }

  //     return res.status(200).json({ shortId: URL.shortId, url });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ msg: "some error occured" });
  //   }
  // }

  // async getOne(req: Request, res: Response) {
  //   const { shortId } = req.params;

  //   if (!shortId) return res.status(400).json({ msg: "id not provided" });

  //   try {
  //     const url: IUrl | null = await Url.findOne({ shortId: shortId }, ['-__v']);

  //     if (!url) return res.status(404).json({ msg: "not found" });

  //     const urlAccessList = await UrlAccess.find({ url: url._id }, ['-__v']);

  //     return res.status(200).json({ url, urlAccess: urlAccessList });

  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ msg: "some error occured" });
  //   }
  // }

  // async index(req: Request, res: Response) {

  //   try {
  //     const URLS = await Url.find({}, ['-__v']);

  //     if (!URLS) return res.status(404).json({ msg: "empty list" });

  //     return res.status(200).json(URLS);

  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ msg: "some error occured" });
  //   }
  // }

  // async count(req: Request, res: Response) {
  //   const { shortId } = req.params;

  //   if (!shortId) return res.status(400).json({ msg: "id not provided" });

  //   try {
  //     const URL: IUrl | null = await Url.findOne({ shortId });
  //     if (!URL) return res.status(400).json({ msg: "invalid url id" });

  //     let aggrCount = await UrlAccess.aggregate([{ $match: { url: { $eq: URL._id } } }, { $count: 'count' }]);

  //     if (aggrCount && aggrCount.length > 0) {
  //       var { count } = aggrCount[0];
  //     }
  //     if (!count) {
  //       count = 0;
  //     }

  //     return res.status(200).json({ shortId: URL.shortId, count: count });

  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ msg: "some error occured" });
  //   }
  // }
}

export default new UrlController();
