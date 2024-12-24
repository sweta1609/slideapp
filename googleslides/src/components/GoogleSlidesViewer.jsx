import React, { useState,useEffect } from "react";
import Presentation from "./Presentation";
import axios from "axios";

const GoogleSlidesViewer = () => {
  // const initialSlidesData = [{
  //     "pageSize": {
  //         "width": {
  //           "magnitude": 9144000,
  //           "unit": "EMU"
  //         },
  //         "height": {
  //           "magnitude": 5143500,
  //           "unit": "EMU"
  //         }
  //       },
  //       "slides": [
  //         {
  //           "objectId": "p",
  //           "pageElements": [
  //             {
  //               "objectId": "i0",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 2.8401999473571777,
  //                 "scaleY": 0.6841999888420105,
  //                 "translateX": 311708.349609375,
  //                 "translateY": 744575,
  //                 "unit": "EMU"
  //               },
  //               "shape": {
  //                 "shapeType": "TEXT_BOX",
  //                 "text": {
  //                   "textElements": [
  //                     {
  //                       "endIndex": 9,
  //                       "paragraphMarker": {
  //                         "style": {
  //                           "direction": "LEFT_TO_RIGHT"
  //                         }
  //                       }
  //                     },
  //                     {
  //                       "endIndex": 9,
  //                       "textRun": {
  //                         "content": "hello123\n"
  //                       }
  //                     }
  //                   ]
  //                 },
  //                 "shapeProperties": {
  //                   "shapeBackgroundFill": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "outline": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "shadow": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "autofit": {
  //                     "fontScale": 1
  //                   }
  //                 },
  //                 "placeholder": {
  //                   "type": "CENTERED_TITLE",
  //                   "parentObjectId": "g2adb6b0dff9_0_5"
  //                 }
  //               }
  //             },
  //             {
  //               "objectId": "i1",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 2.8401999473571777,
  //                 "scaleY": 0.26420000195503235,
  //                 "translateX": 311700,
  //                 "translateY": 2834125,
  //                 "unit": "EMU"
  //               },
  //               "shape": {
  //                 "shapeType": "TEXT_BOX",
  //                 "text": {
  //                   "textElements": [
  //                     {
  //                       "endIndex": 12,
  //                       "paragraphMarker": {
  //                         "style": {
  //                           "direction": "LEFT_TO_RIGHT"
  //                         }
  //                       }
  //                     },
  //                     {
  //                       "endIndex": 12,
  //                       "textRun": {
  //                         "content": "kebfkwbfebq\n"
  //                       }
  //                     }
  //                   ]
  //                 },
  //                 "shapeProperties": {
  //                   "shapeBackgroundFill": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "outline": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "shadow": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "autofit": {
  //                     "fontScale": 1
  //                   }
  //                 },
  //                 "placeholder": {
  //                   "type": "SUBTITLE",
  //                   "parentObjectId": "g2adb6b0dff9_0_6"
  //                 }
  //               }
  //             }
  //           ],
  //           "slideProperties": {
  //             "layoutObjectId": "g2adb6b0dff9_0_4",
  //             "masterObjectId": "g2adb6b0dff9_0_0",
  //             "notesPage": {
  //               "objectId": "p:notes",
  //               "pageType": "NOTES",
  //               "pageElements": [
  //                 {
  //                   "objectId": "i2",
  //                   "size": {
  //                     "width": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     },
  //                     "height": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     }
  //                   },
  //                   "transform": {
  //                     "scaleX": 2.032025,
  //                     "scaleY": 1.143,
  //                     "translateX": 381300,
  //                     "translateY": 685800,
  //                     "unit": "EMU"
  //                   },
  //                   "shape": {
  //                     "shapeProperties": {
  //                       "outline": {
  //                         "propertyState": "INHERIT"
  //                       }
  //                     },
  //                     "placeholder": {
  //                       "type": "SLIDE_IMAGE",
  //                       "parentObjectId": "n:slide"
  //                     }
  //                   }
  //                 },
  //                 {
  //                   "objectId": "i3",
  //                   "size": {
  //                     "width": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     },
  //                     "height": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     }
  //                   },
  //                   "transform": {
  //                     "scaleX": 1.8288,
  //                     "scaleY": 1.3716,
  //                     "translateX": 685800,
  //                     "translateY": 4343400,
  //                     "unit": "EMU"
  //                   },
  //                   "shape": {
  //                     "shapeType": "TEXT_BOX",
  //                     "shapeProperties": {
  //                       "shapeBackgroundFill": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "outline": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "shadow": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "autofit": {
  //                         "fontScale": 1
  //                       }
  //                     },
  //                     "placeholder": {
  //                       "type": "BODY",
  //                       "index": 1,
  //                       "parentObjectId": "n:text"
  //                     }
  //                   }
  //                 }
  //               ],
  //               "pageProperties": {
  //                 "pageBackgroundFill": {
  //                   "propertyState": "INHERIT"
  //                 }
  //               },
  //               "notesProperties": {
  //                 "speakerNotesObjectId": "i3"
  //               }
  //             }
  //           },
  //           "pageProperties": {
  //             "pageBackgroundFill": {
  //               "propertyState": "INHERIT"
  //             }
  //           }
  //         },
  //         {
  //           "objectId": "g2b23fb31bdb_0_0",
  //           "pageElements": [
  //             {
  //               "objectId": "g2b23fb31bdb_0_6",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 44975,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 12800,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 127.0706,
  //                 "scaleY": 127.0703,
  //                 "translateX": 3429000.815,
  //                 "translateY": 2246451.315,
  //                 "unit": "EMU"
  //               },
  //               "image": {
  //                 "contentUrl": "https://lh7-us.googleusercontent.com/d8UbUY9iCgmIdN427w9fFEezmfwuliuHj2MNoaVNzpRHfWRddociEApxfWVrkpfzFjvZa8pxc1iL6ZSJbPL0Z1rVy-3LaaIQ6plEs4ZVrbVjaMIJCvt_h2wKWW0LqzbLo1GxO9F5M33hN49SxZJYN_brTSW1N9CVr8o=s2048",
  //                 "imageProperties": {
  //                   "outline": {
  //                     "outlineFill": {
  //                       "solidFill": {
  //                         "color": {
  //                           "themeColor": "DARK2"
  //                         },
  //                         "alpha": 1
  //                       }
  //                     },
  //                     "weight": {
  //                       "magnitude": 9525,
  //                       "unit": "EMU"
  //                     },
  //                     "dashStyle": "SOLID",
  //                     "propertyState": "NOT_RENDERED"
  //                   },
  //                   "shadow": {
  //                     "type": "OUTER",
  //                     "transform": {
  //                       "scaleX": 1,
  //                       "scaleY": 1,
  //                       "unit": "EMU"
  //                     },
  //                     "alignment": "BOTTOM_LEFT",
  //                     "blurRadius": {
  //                       "unit": "EMU"
  //                     },
  //                     "alpha": 1,
  //                     "rotateWithShape": false,
  //                     "propertyState": "NOT_RENDERED"
  //                   }
  //                 }
  //               }
  //             },
  //             {
  //               "objectId": "g2b23fb31bdb_0_7",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 2.0932,
  //                 "scaleY": 0.1539,
  //                 "translateX": 2881825,
  //                 "translateY": 1667600,
  //                 "unit": "EMU"
  //               },
  //               "shape": {
  //                 "shapeType": "TEXT_BOX",
  //                 "text": {
  //                   "textElements": [
  //                     {
  //                       "endIndex": 12,
  //                       "paragraphMarker": {
  //                         "style": {
  //                           "lineSpacing": 100,
  //                           "alignment": "START",
  //                           "indentStart": {
  //                             "unit": "PT"
  //                           },
  //                           "indentEnd": {
  //                             "unit": "PT"
  //                           },
  //                           "spaceAbove": {
  //                             "unit": "PT"
  //                           },
  //                           "spaceBelow": {
  //                             "unit": "PT"
  //                           },
  //                           "indentFirstLine": {
  //                             "unit": "PT"
  //                           },
  //                           "direction": "LEFT_TO_RIGHT",
  //                           "spacingMode": "COLLAPSE_LISTS"
  //                         }
  //                       }
  //                     },
  //                     {
  //                       "endIndex": 12,
  //                       "textRun": {
  //                         "content": "dhwhqkwgfqg\n",
  //                         "style": {
  //                           "foregroundColor": {
  //                             "opaqueColor": {
  //                               "themeColor": "LIGHT2"
  //                             }
  //                           },
  //                           "bold": false,
  //                           "italic": false,
  //                           "fontFamily": "Arial",
  //                           "fontSize": {
  //                             "magnitude": 18,
  //                             "unit": "PT"
  //                           },
  //                           "baselineOffset": "NONE",
  //                           "smallCaps": false,
  //                           "strikethrough": false,
  //                           "underline": false,
  //                           "weightedFontFamily": {
  //                             "fontFamily": "Arial",
  //                             "weight": 400
  //                           }
  //                         }
  //                       }
  //                     }
  //                   ]
  //                 },
  //                 "shapeProperties": {
  //                   "shapeBackgroundFill": {
  //                     "propertyState": "NOT_RENDERED",
  //                     "solidFill": {
  //                       "color": {
  //                         "rgbColor": {
  //                           "red": 1,
  //                           "green": 1,
  //                           "blue": 1
  //                         }
  //                       },
  //                       "alpha": 1
  //                     }
  //                   },
  //                   "outline": {
  //                     "outlineFill": {
  //                       "solidFill": {
  //                         "alpha": 1
  //                       }
  //                     },
  //                     "weight": {
  //                       "magnitude": 9525,
  //                       "unit": "EMU"
  //                     },
  //                     "dashStyle": "SOLID",
  //                     "propertyState": "NOT_RENDERED"
  //                   },
  //                   "shadow": {
  //                     "type": "OUTER",
  //                     "transform": {
  //                       "scaleX": 1,
  //                       "scaleY": 1,
  //                       "unit": "EMU"
  //                     },
  //                     "alignment": "BOTTOM_LEFT",
  //                     "blurRadius": {
  //                       "unit": "EMU"
  //                     },
  //                     "alpha": 1,
  //                     "rotateWithShape": false,
  //                     "propertyState": "NOT_RENDERED"
  //                   },
  //                   "contentAlignment": "TOP",
  //                   "autofit": {
  //                     "autofitType": "SHAPE_AUTOFIT",
  //                     "fontScale": 1
  //                   }
  //                 }
  //               }
  //             }
  //           ],
  //           "slideProperties": {
  //             "layoutObjectId": "g2adb6b0dff9_0_11",
  //             "masterObjectId": "g2adb6b0dff9_0_0",
  //             "notesPage": {
  //               "objectId": "g2b23fb31bdb_0_0:notes",
  //               "pageType": "NOTES",
  //               "pageElements": [
  //                 {
  //                   "objectId": "g2b23fb31bdb_0_3",
  //                   "size": {
  //                     "width": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     },
  //                     "height": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     }
  //                   },
  //                   "transform": {
  //                     "scaleX": 2.032,
  //                     "scaleY": 1.143,
  //                     "translateX": 381300,
  //                     "translateY": 685800,
  //                     "unit": "EMU"
  //                   },
  //                   "shape": {
  //                     "shapeProperties": {
  //                       "outline": {
  //                         "propertyState": "INHERIT"
  //                       }
  //                     },
  //                     "placeholder": {
  //                       "type": "SLIDE_IMAGE",
  //                       "parentObjectId": "n:slide"
  //                     }
  //                   }
  //                 },
  //                 {
  //                   "objectId": "g2b23fb31bdb_0_4",
  //                   "size": {
  //                     "width": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     },
  //                     "height": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     }
  //                   },
  //                   "transform": {
  //                     "scaleX": 1.8288,
  //                     "scaleY": 1.3716,
  //                     "translateX": 685800,
  //                     "translateY": 4343400,
  //                     "unit": "EMU"
  //                   },
  //                   "shape": {
  //                     "shapeType": "TEXT_BOX",
  //                     "shapeProperties": {
  //                       "shapeBackgroundFill": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "outline": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "shadow": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "autofit": {
  //                         "fontScale": 1
  //                       }
  //                     },
  //                     "placeholder": {
  //                       "type": "BODY",
  //                       "index": 1,
  //                       "parentObjectId": "n:text"
  //                     }
  //                   }
  //                 }
  //               ],
  //               "pageProperties": {
  //                 "pageBackgroundFill": {
  //                   "propertyState": "INHERIT"
  //                 }
  //               },
  //               "notesProperties": {
  //                 "speakerNotesObjectId": "g2b23fb31bdb_0_4"
  //               }
  //             }
  //           },
  //           "pageProperties": {
  //             "pageBackgroundFill": {
  //               "propertyState": "INHERIT"
  //             }
  //           }
  //         },
  //         {
  //           "objectId": "g2b23fb31bdb_0_8",
  //           "pageElements": [
  //             {
  //               "objectId": "g2b23fb31bdb_0_9",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 2.8402,
  //                 "scaleY": 0.1909,
  //                 "translateX": 311700,
  //                 "translateY": 445025,
  //                 "unit": "EMU"
  //               },
  //               "shape": {
  //                 "shapeType": "TEXT_BOX",
  //                 "text": {
  //                   "textElements": [
  //                     {
  //                       "endIndex": 13,
  //                       "paragraphMarker": {
  //                         "style": {
  //                           "direction": "LEFT_TO_RIGHT"
  //                         }
  //                       }
  //                     },
  //                     {
  //                       "endIndex": 13,
  //                       "textRun": {
  //                         "content": "kkokwqjlqwhl\n"
  //                       }
  //                     }
  //                   ]
  //                 },
  //                 "shapeProperties": {
  //                   "shapeBackgroundFill": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "outline": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "shadow": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "autofit": {
  //                     "fontScale": 0.9
  //                   }
  //                 },
  //                 "placeholder": {
  //                   "type": "TITLE",
  //                   "parentObjectId": "g2adb6b0dff9_0_12"
  //                 }
  //               }
  //             },
  //             {
  //               "objectId": "g2b23fb31bdb_0_10",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 3000000,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 2.8402,
  //                 "scaleY": 1.1388,
  //                 "translateX": 311700,
  //                 "translateY": 1152475,
  //                 "unit": "EMU"
  //               },
  //               "shape": {
  //                 "shapeType": "TEXT_BOX",
  //                 "text": {
  //                   "textElements": [
  //                     {
  //                       "endIndex": 10,
  //                       "paragraphMarker": {
  //                         "style": {
  //                           "indentStart": {
  //                             "unit": "PT"
  //                           },
  //                           "indentFirstLine": {
  //                             "unit": "PT"
  //                           },
  //                           "direction": "LEFT_TO_RIGHT"
  //                         }
  //                       }
  //                     },
  //                     {
  //                       "endIndex": 10,
  //                       "textRun": {
  //                         "content": "chhckqqle\n"
  //                       }
  //                     }
  //                   ]
  //                 },
  //                 "shapeProperties": {
  //                   "shapeBackgroundFill": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "outline": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "shadow": {
  //                     "propertyState": "INHERIT"
  //                   },
  //                   "autofit": {
  //                     "fontScale": 1
  //                   }
  //                 },
  //                 "placeholder": {
  //                   "type": "BODY",
  //                   "parentObjectId": "g2adb6b0dff9_0_13"
  //                 }
  //               }
  //             },
  //             {
  //               "objectId": "g2b50a309b2b_0_0",
  //               "size": {
  //                 "width": {
  //                   "magnitude": 30000,
  //                   "unit": "EMU"
  //                 },
  //                 "height": {
  //                   "magnitude": 18550,
  //                   "unit": "EMU"
  //                 }
  //               },
  //               "transform": {
  //                 "scaleX": 158.905,
  //                 "scaleY": 158.9043,
  //                 "translateX": 412825.5925,
  //                 "translateY": 2195824.9925,
  //                 "unit": "EMU"
  //               },
  //               "title": "Points scored",
  //               "sheetsChart": {
  //                 "spreadsheetId": "115FUn1Zkp1NrCbeXEr74oAyPlJIOleTqhzYZrVLTb2Q",
  //                 "chartId": 1622092212,
  //                 "contentUrl": "https://lh7-us.googleusercontent.com/a1h9TC3qyFNN8-RraAqI-_tHvoBOOpMDQFWlHzOPAcTZQjUKkh1oOU30wbKYZ8jmv6neOdvgM0IDFKdWO9Uc1Y-ac6ocevW1vH5ti1pAHmEFXEnounVrOPODCKe0MJ5oRQd35Gd4qCSX4XouUOQTU1mt1tf828OkIII=s2048",
  //                 "sheetsChartProperties": {
  //                   "chartImageProperties": {
  //                     "outline": {
  //                       "outlineFill": {
  //                         "solidFill": {
  //                           "color": {
  //                             "themeColor": "DARK2"
  //                           },
  //                           "alpha": 1
  //                         }
  //                       },
  //                       "weight": {
  //                         "magnitude": 9525,
  //                         "unit": "EMU"
  //                       },
  //                       "dashStyle": "SOLID",
  //                       "propertyState": "NOT_RENDERED"
  //                     },
  //                     "shadow": {
  //                       "type": "OUTER",
  //                       "transform": {
  //                         "scaleX": 1,
  //                         "scaleY": 1,
  //                         "unit": "EMU"
  //                       },
  //                       "alignment": "BOTTOM_LEFT",
  //                       "blurRadius": {
  //                         "unit": "EMU"
  //                       },
  //                       "alpha": 1,
  //                       "rotateWithShape": false,
  //                       "propertyState": "NOT_RENDERED"
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           ],
  //           "slideProperties": {
  //             "layoutObjectId": "g2adb6b0dff9_0_11",
  //             "masterObjectId": "g2adb6b0dff9_0_0",
  //             "notesPage": {
  //               "objectId": "g2b23fb31bdb_0_8:notes",
  //               "pageType": "NOTES",
  //               "pageElements": [
  //                 {
  //                   "objectId": "g2b23fb31bdb_0_11",
  //                   "size": {
  //                     "width": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     },
  //                     "height": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     }
  //                   },
  //                   "transform": {
  //                     "scaleX": 2.032,
  //                     "scaleY": 1.143,
  //                     "translateX": 381300,
  //                     "translateY": 685800,
  //                     "unit": "EMU"
  //                   },
  //                   "shape": {
  //                     "shapeProperties": {
  //                       "outline": {
  //                         "propertyState": "INHERIT"
  //                       }
  //                     },
  //                     "placeholder": {
  //                       "type": "SLIDE_IMAGE",
  //                       "parentObjectId": "n:slide"
  //                     }
  //                   }
  //                 },
  //                 {
  //                   "objectId": "g2b23fb31bdb_0_12",
  //                   "size": {
  //                     "width": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     },
  //                     "height": {
  //                       "magnitude": 3000000,
  //                       "unit": "EMU"
  //                     }
  //                   },
  //                   "transform": {
  //                     "scaleX": 1.8288,
  //                     "scaleY": 1.3716,
  //                     "translateX": 685800,
  //                     "translateY": 4343400,
  //                     "unit": "EMU"
  //                   },
  //                   "shape": {
  //                     "shapeType": "TEXT_BOX",
  //                     "shapeProperties": {
  //                       "shapeBackgroundFill": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "outline": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "shadow": {
  //                         "propertyState": "INHERIT"
  //                       },
  //                       "autofit": {
  //                         "fontScale": 1
  //                       }
  //                     },
  //                     "placeholder": {
  //                       "type": "BODY",
  //                       "index": 1,
  //                       "parentObjectId": "n:text"
  //                     }
  //                   }
  //                 }
  //               ],
  //               "pageProperties": {
  //                 "pageBackgroundFill": {
  //                   "propertyState": "INHERIT"
  //                 }
  //               },
  //               "notesProperties": {
  //                 "speakerNotesObjectId": "g2b23fb31bdb_0_12"
  //               }
  //             }
  //           },
  //           "pageProperties": {
  //             "pageBackgroundFill": {
  //               "propertyState": "INHERIT"
  //             }
  //           }
  //         }
  //       ],
  //       "title": "hello23",
  //   }]

  //   const [slidesData, setSlidesData] = useState(initialSlidesData);
  //   if (!slidesData) {
  //     return <div>Loading...</div>;
  //   }

  const initialSlidesData = [
    {
      pageSize: {
        width: {
          magnitude: 9144000,
          unit: "EMU",
        },
        height: {
          magnitude: 5143500,
          unit: "EMU",
        },
      },
      slides: [
        {
          objectId: "hgDyti_9",
          slideProperties: {
            layoutObjectId: "p11",
            masterObjectId: "simple-light-2",
            notesPage: {
              objectId: "hgDyti_9:notes",
              pageType: "NOTES",
              pageElements: [
                {
                  objectId: "SLIDES_API1682944946_2",
                  size: {
                    width: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                    height: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                  },
                  transform: {
                    scaleX: 2.032,
                    scaleY: 1.143,
                    translateX: 381300,
                    translateY: 685800,
                    unit: "EMU",
                  },
                  shape: {
                    shapeProperties: {
                      outline: {
                        propertyState: "INHERIT",
                      },
                    },
                    placeholder: {
                      type: "SLIDE_IMAGE",
                      parentObjectId: "n:slide",
                    },
                  },
                },
                {
                  objectId: "SLIDES_API1682944946_3",
                  size: {
                    width: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                    height: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                  },
                  transform: {
                    scaleX: 1.8288,
                    scaleY: 1.3716,
                    translateX: 685800,
                    translateY: 4343400,
                    unit: "EMU",
                  },
                  shape: {
                    shapeType: "TEXT_BOX",
                    shapeProperties: {
                      shapeBackgroundFill: {
                        propertyState: "INHERIT",
                      },
                      outline: {
                        propertyState: "INHERIT",
                      },
                      shadow: {
                        propertyState: "INHERIT",
                      },
                      autofit: {
                        fontScale: 1,
                      },
                    },
                    placeholder: {
                      type: "BODY",
                      index: 1,
                      parentObjectId: "n:text",
                    },
                  },
                },
              ],
              pageProperties: {
                pageBackgroundFill: {
                  propertyState: "INHERIT",
                },
              },
              notesProperties: {
                speakerNotesObjectId: "SLIDES_API1682944946_3",
              },
            },
          },
          pageProperties: {
            pageBackgroundFill: {
              stretchedPictureFill: {
                contentUrl:
                  "https://lh7-us.googleusercontent.com/97BJcdZT0c5giC_BBJNBtt_Rjmmf2ExclNg_Stweyr6Kfu82vdkz7RZji9XkQdd3SqKeUHfef_jpY_AIbJOVLtLHLLlviKOCxCAXG9n-mbz9YA5uQL-QzGAFc9Yi9FfqG-mQPsrUluGHJfvVuY36Yewvt3ecfOt7trs=s2048",
                size: {
                  width: {
                    magnitude: 22500,
                    unit: "EMU",
                  },
                  height: {
                    magnitude: 15000,
                    unit: "EMU",
                  },
                },
              },
            },
          },
        },
        {
          objectId: "kolUiO_90",
          pageElements: [
            {
              objectId: "iokLpweQ_87h",
              size: {
                width: {
                  magnitude: 3000000,
                  unit: "EMU",
                },
                height: {
                  magnitude: 3000000,
                  unit: "EMU",
                },
              },
              transform: {
                scaleX: 2.8402,
                scaleY: 0.1909,
                translateX: 311700,
                translateY: 445025,
                unit: "EMU",
              },
              shape: {
                shapeType: "TEXT_BOX",
                text: {
                  textElements: [
                    {
                      endIndex: 12,
                      paragraphMarker: {
                        style: {
                          direction: "LEFT_TO_RIGHT",
                        },
                      },
                    },
                    {
                      endIndex: 12,
                      textRun: {
                        content: "Gadget Inc.\n",
                      },
                    },
                  ],
                },
                shapeProperties: {
                  shapeBackgroundFill: {
                    propertyState: "INHERIT",
                  },
                  outline: {
                    propertyState: "INHERIT",
                  },
                  shadow: {
                    propertyState: "INHERIT",
                  },
                  autofit: {
                    autofitType: "NONE",
                    fontScale: 1,
                  },
                },
                placeholder: {
                  type: "TITLE",
                  parentObjectId: "p5_i0",
                },
              },
            },
            {
              objectId: "SLIDES_API803807247_0",
              size: {
                width: {
                  magnitude: 3000000,
                  unit: "EMU",
                },
                height: {
                  magnitude: 3000000,
                  unit: "EMU",
                },
              },
              transform: {
                scaleX: 1.3333,
                scaleY: 1.1388,
                translateX: 311700,
                translateY: 1152475,
                unit: "EMU",
              },
              shape: {
                shapeType: "TEXT_BOX",
                shapeProperties: {
                  shapeBackgroundFill: {
                    propertyState: "INHERIT",
                  },
                  outline: {
                    propertyState: "INHERIT",
                  },
                  shadow: {
                    propertyState: "INHERIT",
                  },
                  autofit: {
                    autofitType: "NONE",
                    fontScale: 1,
                  },
                },
                placeholder: {
                  type: "BODY",
                  parentObjectId: "p5_i1",
                },
              },
            },
            {
              objectId: "SLIDES_API803807247_1",
              size: {
                width: {
                  magnitude: 3000000,
                  unit: "EMU",
                },
                height: {
                  magnitude: 3000000,
                  unit: "EMU",
                },
              },
              transform: {
                scaleX: 1.3333,
                scaleY: 1.1388,
                translateX: 4832400,
                translateY: 1152475,
                unit: "EMU",
              },
              shape: {
                shapeType: "TEXT_BOX",
                shapeProperties: {
                  shapeBackgroundFill: {
                    propertyState: "INHERIT",
                  },
                  outline: {
                    propertyState: "INHERIT",
                  },
                  shadow: {
                    propertyState: "INHERIT",
                  },
                  autofit: {
                    autofitType: "NONE",
                    fontScale: 1,
                  },
                },
                placeholder: {
                  type: "BODY",
                  index: 1,
                  parentObjectId: "p5_i2",
                },
              },
            },
          ],
          slideProperties: {
            layoutObjectId: "p5",
            masterObjectId: "simple-light-2",
            notesPage: {
              objectId: "kolUiO_90:notes",
              pageType: "NOTES",
              pageElements: [
                {
                  objectId: "SLIDES_API803807247_2",
                  size: {
                    width: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                    height: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                  },
                  transform: {
                    scaleX: 2.032,
                    scaleY: 1.143,
                    translateX: 381300,
                    translateY: 685800,
                    unit: "EMU",
                  },
                  shape: {
                    shapeProperties: {
                      outline: {
                        propertyState: "INHERIT",
                      },
                    },
                    placeholder: {
                      type: "SLIDE_IMAGE",
                      parentObjectId: "n:slide",
                    },
                  },
                },
                {
                  objectId: "SLIDES_API803807247_3",
                  size: {
                    width: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                    height: {
                      magnitude: 3000000,
                      unit: "EMU",
                    },
                  },
                  transform: {
                    scaleX: 1.8288,
                    scaleY: 1.3716,
                    translateX: 685800,
                    translateY: 4343400,
                    unit: "EMU",
                  },
                  shape: {
                    shapeType: "TEXT_BOX",
                    shapeProperties: {
                      shapeBackgroundFill: {
                        propertyState: "INHERIT",
                      },
                      outline: {
                        propertyState: "INHERIT",
                      },
                      shadow: {
                        propertyState: "INHERIT",
                      },
                      autofit: {
                        fontScale: 1,
                      },
                    },
                    placeholder: {
                      type: "BODY",
                      index: 1,
                      parentObjectId: "n:text",
                    },
                  },
                },
              ],
              pageProperties: {
                pageBackgroundFill: {
                  propertyState: "INHERIT",
                },
              },
              notesProperties: {
                speakerNotesObjectId: "SLIDES_API803807247_3",
              },
            },
          },
          pageProperties: {
            pageBackgroundFill: {
              propertyState: "INHERIT",
            },
          },
        },
      ],
      title: "kol",
    },
  ];

  const [slidesData, setSlidesData] = useState(initialSlidesData);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);
  const [batchUpdateRequests, setBatchUpdateRequests] = useState([]);

  const [textToAdd, setTextToAdd] = useState("");
  const [isAddingText, setIsAddingText] = useState(false);

const addSlide = () => {
  const objectIdPrefix = "newSlideObjectId_";
  const uniqueId = new Date().getTime();
  const newSlide = {
    objectId: `${objectIdPrefix}${uniqueId}`,
    slideProperties: {
      layoutObjectId: "p11",
      masterObjectId: "simple-light-2",
      notesPage: {
        objectId: `newSlideObjectId_${slidesData.length}:notes`,
        pageType: "NOTES",
        pageElements: [],
        pageProperties: {
          pageBackgroundFill: {
            propertyState: "INHERIT",
          },
        },
        notesProperties: {
          speakerNotesObjectId: `newSlideObjectId_${slidesData.length}:speakerNotes`,
        },
      },
    },
    pageProperties: {
      pageBackgroundFill: {
        stretchedPictureFill: {
          contentUrl: "https://placeholder-image-url.com",
          size: {
            width: {
              magnitude: 22500,
              unit: "EMU",
            },
            height: {
              magnitude: 15000,
              unit: "EMU",
            },
          },
        },
      },
    },
  };

  // Use a separate variable to store the updated slides data
  const updatedSlidesData = slidesData.map((slide, index) =>
    index === slidesData.length - 1
      ? { ...slide, slides: [...slide.slides, newSlide] }
      : slide
  );

  setSlidesData(updatedSlidesData);

  setBatchUpdateRequests((prevRequests) => [
    ...prevRequests,
    {
      createSlide: {
        objectId: newSlide.objectId,
        insertionIndex: slidesData.length+1,
        slideLayoutReference: {
          predefinedLayout: "BLANK",
        },
      },
    },
  ]);
};


  const handleSlideSelect = (index) => {
    // Set the selected slide index
    setSelectedSlideIndex(index);
  };
  const handleAddTextClick = () => {
    setIsAddingText(true);
  };
const handleTextSubmit = () => {
  if (selectedSlideIndex !== null && textToAdd.trim() !== "") {
    const updatedSlidesData = slidesData.map((slide, index) =>
      index === selectedSlideIndex
        ? {
            ...slide,
            slides: slide.slides.map((s, i) =>
              i === selectedSlideIndex
                ? {
                    ...s,
                    pageElements: s.pageElements
                      ? [
                          ...s.pageElements,
                          {
                            objectId: `newTextObjectId_${new Date().getTime()}`,
                            size: {
                              width: {
                                magnitude: 3000000,
                                unit: "EMU",
                              },
                              height: {
                                magnitude: 3000000,
                                unit: "EMU",
                              },
                            },
                            transform: {
                              scaleX: 1,
                              scaleY: 1,
                              // Customize the position as needed
                              translateX: 1000000,
                              translateY: 1000000,
                              unit: "EMU",
                            },
                            shape: {
                              shapeType: "TEXT_BOX",
                              text: {
                                textElements: [
                                  {
                                    endIndex: textToAdd.length,
                                    textRun: {
                                      content: textToAdd,
                                    },
                                  },
                                ],
                              },
                              shapeProperties: {
                                shapeBackgroundFill: {
                                  propertyState: "INHERIT",
                                },
                                outline: {
                                  propertyState: "INHERIT",
                                },
                                shadow: {
                                  propertyState: "INHERIT",
                                },
                                autofit: {
                                  autofitType: "NONE",
                                  fontScale: 1,
                                },
                              },
                              placeholder: {
                                type: "BODY", // Customize based on your requirements
                                index: s.pageElements.length + 1,
                                parentObjectId: "p5_i2", // Customize based on your requirements
                              },
                            },
                          },
                        ]
                      : s.pageElements,
                  }
                : s
            ),
          }
        : slide
    );

    setSlidesData(updatedSlidesData);
    setTextToAdd("");
    setIsAddingText(false);
  }
};


  const makeBatchUpdateRequest = async (presentationId, requestBody) => {
    try {
      const apiUrl = `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`;
      const accessToken = localStorage.getItem("access_token");

      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Batch Update Response:", response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error("Error making batch update request:", error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const presentationId = "1X-bK_oqFM1tuuKEaGbLiRsOk4mabG3xC4B6rMUwvMsQ";
    const requestBody = {
      requests: batchUpdateRequests,
    };

    try {
      await makeBatchUpdateRequest(presentationId, requestBody);
      console.log("Batch Update Request successful!");
    } catch (error) {
      console.error("Error submitting batch update request:", error);
    }
  };

  return (
    <>
      <button
        style={{ position: "fixed", left: 10, top: 10 }}
        onClick={addSlide}
      >
        Add Slide
      </button>
      {selectedSlideIndex !== null && (
        <>
          <button style={{ position: "fixed", right: 5, top: 10 }} onClick={handleAddTextClick}>
            Add Text
          </button>
          {isAddingText && (
            <div style={{ position: "absolute", right: 5, top: 50 }}>
              <input
                type="text"
                value={textToAdd}
                onChange={(e) => setTextToAdd(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleTextSubmit()}
              />
              <button onClick={handleTextSubmit}>Enter</button>
            </div>
          )}
        </>
      )}
      <Presentation jsonData={slidesData} onSlideClick={handleSlideSelect} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default GoogleSlidesViewer;
