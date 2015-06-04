using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using RoachFrontend.Models;



namespace RoachFrontend.Controllers
{
    public class HomeController : Controller
    {
        private static List<UserStat> statistics = new List<UserStat>();
        private static UserStat bill;
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            try
            {
                ViewBag.Message = "ТараRunner";
                if (bill == null)
                {
                    ViewData["user"] = null;
                    ViewData["money"] = null;
                }
                else {
                ViewData["user"] = bill.UserId;
                ViewData["money"] = bill.Money;
                }
                if (bill.Money > 0)
                {
                    ViewData["result1"] = "Бессовестно забирает";
                    ViewData["result2"] = "единиц валюты у разводчиков атлетизировананных и спортивизированных тараканов";
                }
                else
                { ViewData["result1"] = "подлетает на бабос в размере";
                ViewData["result2"] = "единиц валюты у фонда любителей красных африканских тараканов"; 
                }
                ViewData["money"] = Math.Abs(bill.Money);
            }
            catch { }
            return View();
        }

        public ActionResult Manage()
        {
            return View();
        }

        public ActionResult Stats()
        {
          // var dbs = new DbService();
          //  var currentStats = dbs.GetStats();
            var data = JsonConvert.SerializeObject(new
            {
                stats = statistics,
                success = true
            });
            return Content(data);
        }

       /* public class DbService
        {
           public List<UserStat> GetStats()
            {
              /* var connectionString = ConfigurationManager.ConnectionStrings[0].ConnectionString;

                var conn = new SqlConnection(connectionString);
                conn.open();
                SqlDataAdapter da = new SqlDataAdapter("select * from stat", conn);
                da.Fill(dataTable);
                foreach (DataRow row in dataTable.Rows)
                {
                    var s = new UserStat();
                    s.UserId = row["UserId"].ToString();
                    s.Money = (int)row["money"];
                    yield return;
                }
                return null;
            }
        }*/

        public ActionResult SaveStats(string data)
        {
            var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            var index = -1;
            try { index = statistics.FindIndex(x => x.UserId == userStat.UserId); }
            catch{index = 1;}
            if (index != -1)
            {
                userStat.Money += statistics[index].Money;
                statistics[index] = userStat;
            }
            else statistics.Add(userStat);
          
            return Content("OK");
        }

        public ActionResult BurnMyAss(string data)
        {
            bill = JsonConvert.DeserializeObject<UserStat>(data);
           
            return Content("OK");
        }

    }
}
