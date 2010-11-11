using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Globalization;

namespace SampleAspMvc3WithTelerik.Controllers
{
    public class FunWithNumericTextBoxController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SampleOne()
        {
            return View();
        }

        public ActionResult SampleTwo()
        {
            return View();
        }

        public ActionResult SampleThree()
        {
            Hashtable data = new Hashtable();
            data["SampleThree_0"] = GetValueInEnUS(100);
            data["SampleThree_1"] = GetValueInEnUS(20.6);
            data["SampleThree_2"] = GetValueInEnUS(24);
            data["SampleThree_3"] = GetValueInEnUS(0.5);

            ViewModel.SampleThree = new SampleThree(data);
            return View();
        }

        public ActionResult SampleFour()
        {
            return View();
        }

        /// <summary>
        /// see Global.asax Application_BeginRequest
        /// when we set the culture to fr-FR the values are displayed in the format 20,6
        /// this method forces them to 20.6 because these are being used by javascript
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        private string GetValueInEnUS(double value)
        {
            CultureInfo en = new CultureInfo("en-US");
            return value.ToString("f", en);            
        }
    }
}
