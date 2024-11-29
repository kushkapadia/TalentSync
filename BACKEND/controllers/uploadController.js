const Messages = require("../constants/Message");
const JsonResponse = require("../helper/JsonResponse");
const jwt = require("jsonwebtoken");
const {
  uploadSingleFileOnCloudinary,
  uploadMultipleFilesOnCloudinary,
  deleteSingleFileFromCloudinary,
  deleteMultipleFilesFromCloudinary,
} = require("../helper/cloudinary");

// Upload Files

exports.uploadSingleFile = async function (req, res) {
  console.log("Request File");

  // If you are sending only one file only use req.file
  console.log(req.file);

  // Get the Local Path from the server which will be stored by multer defined in the middleware
  const image = req.file?.path;

  console.log("LocalPath: ", image);

  // Use the local Path to upload the file to Cloudinary
  const result = await uploadSingleFileOnCloudinary(image);

  console.log("Result" + result);

  // Make sure if the file has been uploaded to Cloudinary, store the cloudinary URL in the database
  if (result == null) {
    new JsonResponse(req, res).jsonSuccess(
      null,
      new Messages().FAILED_TO_SAVE_TO_CLOUDINARY
    );
    return;
  }

  console.log("Cloudinary Result: ", result);

  new JsonResponse(req, res).jsonSuccess(
    result.url,
    new Messages().SUCCESSFULLY_RECEIVED
  );
};

exports.uploadMultipleFiles = async function (req, res) {
  // Get the Local Path from the server which will be stored by multer defined in the middleware
  const attachments = req.files;

  // If there are no attachments
  if (attachments.length == 0) {
    new JsonResponse(req, res).jsonSuccess(null, new Messages().FILE_NOT_FOUND);
    return;
  }

  // Use the local Path to upload the file to Cloudinary
  const result = await uploadMultipleFilesOnCloudinary(attachments);

  // Make sure if the file has been uploaded to Cloudinary, store the cloudinary URL in the database
  if (result == null) {
    new JsonResponse(req, res).jsonSuccess(
      null,
      new Messages().FAILED_TO_SAVE_TO_CLOUDINARY
    );
    return;
  }

  console.log("Cloudinary Result: ", result);

  new JsonResponse(req, res).jsonSuccess(
    result,
    new Messages().SUCCESSFULLY_RECEIVED
  );
};

exports.uploadFiles = async function (req, res) {
  // Get the Local Path from the server which will be stored by multer defined in the middleware
  const userImagePath = req.files?.userImage[0].path;
  const coverPhotoPath = req.files?.coverPhoto[0].path;

  // If there are no images
  if (userImagePath == null || coverPhotoPath == null) {
    new JsonResponse(req, res).jsonSuccess(null, new Messages().FILE_NOT_FOUND);
    return;
  }

  // Use the local Path to upload the file to Cloudinary
  const userImageURL = await uploadSingleFileOnCloudinary(userImagePath);
  const coverPhotoURL = await uploadSingleFileOnCloudinary(coverPhotoPath);

  // Make sure if the file has been uploaded to Cloudinary, store the cloudinary URL in the database
  if (!userImageURL || !coverPhotoURL) {
    new JsonResponse(req, res).jsonSuccess(
      null,
      new Messages().FAILED_TO_SAVE_TO_CLOUDINARY
    );
    return;
  }

  console.log("Cloudinary Result: ", userImageURL, coverPhotoURL);

  new JsonResponse(req, res).jsonSuccess(
    {
      userImageURL: userImageURL.url,
      coverPhotoURL: coverPhotoURL.url,
    },
    new Messages().SUCCESSFULLY_RECEIVED
  );
};

// Delete Files

exports.deleteSingleFile = async function (req, res) {
  const publicId = req.body.publicId;

  // Delete the file from Cloudinary
  const result = await deleteSingleFileFromCloudinary(publicId);

  // Make sure if the file has been deleted from Cloudinary
  if (!result) {
    new JsonResponse(req, res).jsonSuccess(
      null,
      new Messages().FAILED_TO_DELETE_FROM_CLOUDINARY
    );
    return;
  }

  new JsonResponse(req, res).jsonSuccess(
    null,
    new Messages().SUCCESSFULLY_FILE_DELETED
  );
};

exports.deleteMultipleFiles = async function (req, res) {
  const publicIds = req.body.publicIds;

  // Delete the file from Cloudinary
  const result = await deleteMultipleFilesFromCloudinary(publicIds);

  // Make sure if the file has been deleted from Cloudinary
  if (!result) {
    new JsonResponse(req, res).jsonSuccess(
      null,
      new Messages().FAILED_TO_DELETE_FROM_CLOUDINARY
    );
    return;
  }

  new JsonResponse(req, res).jsonSuccess(
    null,
    new Messages().SUCCESSFULLY_FILE_DELETED
  );
};