(function() {
    'use strict';

    angular
        .module('myTaskDemo')
        .factory('EmployeesService', EmployeesService);

    /** @ngInject */
    function EmployeesService(localStorage,$log,$q) {

        //employees array to hold list of all employees
        var i, employees = [{"_id":"56f22f5c9b5af9c412d93348","balance":1260.43,"picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":"Hurley Anthony","gender":"male","company":"COMVEY","email":"hurleyanthony@comvey.com","phone":"+1 (914) 501-2718","address":"130 Taaffe Place, Websterville, Pennsylvania, 9732","about":"Ad laboris in reprehenderit in velit aliqua minim ad ex irure occaecat. Lorem commodo cillum ipsum nostrud incididunt proident in aliqua ut qui consectetur adipisicing. Quis anim nostrud velit enim nostrud ipsum nulla. Id incididunt voluptate eiusmod aute reprehenderit fugiat non in aliqua velit anim aliqua cillum. Culpa dolore nulla magna aute ex. Anim id consequat magna ea irure voluptate.\r\n","registered":"2014-05-10T12:27:26 -06:-30"},{"_id":"56f22f5c6618b1e16742f1a5","balance":2088.55,"picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":"Aimee Beard","gender":"female","company":"HATOLOGY","email":"aimeebeard@hatology.com","phone":"+1 (921) 569-2966","address":"685 Keap Street, Fulford, West Virginia, 9393","about":"Aliquip deserunt eu irure qui aliqua exercitation. Excepteur minim est ut dolore ea sint aliquip incididunt eiusmod fugiat tempor est velit mollit. Magna aute enim magna dolore laborum minim reprehenderit do eiusmod duis laboris aute ullamco commodo.\r\n","registered":"2015-02-03T09:53:42 -06:-30"},{"_id":"56f22f5c51803c5beed55b60","balance":2072.75,"picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":"Louisa Gregory","gender":"female","company":"IDETICA","email":"louisagregory@idetica.com","phone":"+1 (913) 576-2204","address":"176 Franklin Street, Trinway, South Dakota, 6378","about":"Consequat enim aliquip ut pariatur Lorem aliquip dolore ad veniam laboris duis velit. Dolor veniam irure elit exercitation consequat amet adipisicing quis nisi id nisi. Irure elit Lorem labore aliqua nisi elit deserunt commodo sunt mollit ut officia in. Voluptate qui nisi proident occaecat.\r\n","registered":"2016-02-23T02:45:33 -06:-30"},{"_id":"56f22f5c54a05b74d1a588f4","balance":1874.3,"picture":"http://placehold.it/32x32","age":21,"eyeColor":"blue","name":"Kirsten Hendrix","gender":"female","company":"EXOSWITCH","email":"kirstenhendrix@exoswitch.com","phone":"+1 (882) 537-2173","address":"565 Heath Place, Gouglersville, Idaho, 3512","about":"Commodo est pariatur ex irure sint duis nulla. Consequat quis non incididunt adipisicing amet exercitation. Lorem aute in culpa mollit duis commodo dolore. Officia laboris id sit do sit. Deserunt consequat excepteur anim pariatur ad sunt id ex exercitation nostrud amet sit occaecat. Deserunt dolore velit commodo velit quis cupidatat.\r\n","registered":"2015-07-29T01:09:16 -06:-30"},{"_id":"56f22f5c73246d32347362c6","balance":1994.28,"picture":"http://placehold.it/32x32","age":25,"eyeColor":"green","name":"Sophie Bryan","gender":"female","company":"GENMEX","email":"sophiebryan@genmex.com","phone":"+1 (834) 557-2324","address":"424 Dunne Place, Bedias, Connecticut, 2333","about":"Officia est excepteur occaecat dolore officia non fugiat veniam ex aute. Tempor commodo eiusmod ut mollit non in magna enim veniam culpa. Irure ut eu elit officia est sint aliquip aute voluptate eiusmod nostrud incididunt. Ad consequat deserunt anim est.\r\n","registered":"2014-10-07T05:20:24 -06:-30"},{"_id":"56f22f5c1aa2d5ccd5c87b6e","balance":3286.41,"picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":"Mcdonald Stafford","gender":"male","company":"JAMNATION","email":"mcdonaldstafford@jamnation.com","phone":"+1 (809) 401-2493","address":"978 Osborn Street, Levant, Louisiana, 7169","about":"Adipisicing irure deserunt reprehenderit cupidatat esse qui officia magna cupidatat est. Minim occaecat est consequat mollit duis magna nulla dolor elit commodo mollit. Minim in occaecat duis aliquip ut voluptate.\r\n","registered":"2015-07-16T03:28:52 -06:-30"},{"_id":"56f22f5c096c42a1e2367a9c","balance":1700.41,"picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":"Annmarie Porter","gender":"female","company":"BLUEGRAIN","email":"annmarieporter@bluegrain.com","phone":"+1 (883) 498-3193","address":"413 Meserole Street, Genoa, Federated States Of Micronesia, 8814","about":"Reprehenderit cillum sint mollit occaecat aliquip non anim occaecat ipsum proident aliquip minim esse tempor. Duis dolor aute elit duis id esse elit consectetur elit elit officia sit. Nostrud sunt consequat dolore in culpa et eiusmod officia laborum mollit veniam cupidatat aute. Adipisicing esse dolore cillum in. Voluptate aute ad ut laboris ad nisi consectetur excepteur officia. In consequat exercitation consequat pariatur.\r\n","registered":"2014-02-24T06:59:30 -06:-30"},{"_id":"56f22f5ce448e77216946a0e","balance":1577.16,"picture":"http://placehold.it/32x32","age":23,"eyeColor":"brown","name":"Roxanne Holt","gender":"female","company":"AEORA","email":"roxanneholt@aeora.com","phone":"+1 (811) 529-3579","address":"445 Howard Alley, Chesapeake, Mississippi, 3880","about":"Ad aliquip aute aliquip proident consectetur fugiat nulla duis nisi fugiat ut ut. Lorem esse dolor sint aliquip esse magna cillum elit fugiat. Aliquip cillum cupidatat et magna aliquip cillum velit tempor minim non eiusmod consectetur exercitation. Non ex ullamco magna ea esse proident exercitation.\r\n","registered":"2014-01-26T03:28:00 -06:-30"},{"_id":"56f22f5cf01459ed8388b25d","balance":1294.85,"picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":"Consuelo Lambert","gender":"female","company":"TROPOLIS","email":"consuelolambert@tropolis.com","phone":"+1 (921) 413-3369","address":"304 Stewart Street, Elwood, Arizona, 2458","about":"Et ullamco incididunt aliqua cupidatat eu aute eiusmod occaecat incididunt sint pariatur mollit. Cillum non cupidatat commodo laborum ad. Labore labore dolor et sint aute magna ex ad.\r\n","registered":"2015-09-01T12:11:30 -06:-30"},{"_id":"56f22f5cf339f866b91104eb","balance":2160.88,"picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":"Brigitte Richmond","gender":"female","company":"GAPTEC","email":"brigitterichmond@gaptec.com","phone":"+1 (896) 452-3306","address":"826 Royce Place, Kipp, Delaware, 1903","about":"Eiusmod ad sit nisi et commodo anim adipisicing cillum. Consectetur dolor officia adipisicing duis ex occaecat occaecat. Ut qui do nostrud exercitation eu in voluptate exercitation enim sint est cillum ullamco labore. Mollit ipsum dolor veniam dolore nisi fugiat enim.\r\n","registered":"2014-11-04T01:45:21 -06:-30"},{"_id":"56f22f5c20d74b8244b84cce","balance":3028.83,"picture":"http://placehold.it/32x32","age":30,"eyeColor":"blue","name":"Alejandra Wynn","gender":"female","company":"VERTON","email":"alejandrawynn@verton.com","phone":"+1 (953) 447-2495","address":"823 Summit Street, Martell, Michigan, 5203","about":"Reprehenderit nostrud dolore Lorem tempor minim cillum veniam ut in laborum. Fugiat officia ut reprehenderit culpa qui incididunt veniam eu laboris aliqua. Elit sit est sunt dolor aute adipisicing Lorem officia pariatur sint aute nisi ut. Aliquip enim nostrud cillum minim magna velit Lorem magna mollit. Deserunt ex consectetur irure consectetur ipsum aliquip occaecat irure magna officia. Sunt minim laboris magna adipisicing in Lorem ad nostrud minim ex aliqua commodo minim officia. Culpa labore id aliqua ullamco ipsum nulla non cupidatat aliquip ex voluptate amet ea in.\r\n","registered":"2015-06-12T03:48:33 -06:-30"},{"_id":"56f22f5ca2a79789c0a52948","balance":1193.73,"picture":"http://placehold.it/32x32","age":30,"eyeColor":"blue","name":"Benjamin Gross","gender":"male","company":"ZAPHIRE","email":"benjamingross@zaphire.com","phone":"+1 (903) 498-3277","address":"365 Quentin Road, Hoagland, Rhode Island, 6420","about":"Nulla sunt aliquip ullamco fugiat tempor tempor laboris amet voluptate exercitation ad magna enim. Tempor quis cillum reprehenderit voluptate in consectetur in cupidatat. Exercitation dolor culpa mollit fugiat officia voluptate. Non ut eiusmod ad dolore dolor ad mollit in pariatur reprehenderit. Proident cillum ex id culpa mollit. Veniam ea ex id proident cillum officia qui laboris eu veniam Lorem dolor. Et duis veniam aliqua elit voluptate minim veniam.\r\n","registered":"2014-02-16T11:56:46 -06:-30"},{"_id":"56f22f5cf5c5896915464383","balance":3163.53,"picture":"http://placehold.it/32x32","age":23,"eyeColor":"brown","name":"Meghan Morin","gender":"female","company":"SONIQUE","email":"meghanmorin@sonique.com","phone":"+1 (978) 554-3898","address":"203 Main Street, Juntura, Kentucky, 4430","about":"Mollit dolor non non reprehenderit consectetur incididunt dolore. Proident ad exercitation laboris cupidatat veniam in ex eu et. Exercitation ad laboris aute eiusmod eiusmod veniam excepteur quis irure irure Lorem veniam aliquip.\r\n","registered":"2016-01-14T07:09:18 -06:-30"},{"_id":"56f22f5cb619162b291bddc5","balance":3291.18,"picture":"http://placehold.it/32x32","age":30,"eyeColor":"brown","name":"Francis Rose","gender":"male","company":"UNISURE","email":"francisrose@unisure.com","phone":"+1 (838) 540-2607","address":"742 Union Street, Wyoming, New Jersey, 8054","about":"Est irure ad consectetur commodo labore deserunt amet culpa. Culpa adipisicing et voluptate cillum commodo eiusmod minim dolore adipisicing Lorem esse occaecat do occaecat. Laboris id dolor eu dolore sit magna in sunt tempor enim laborum cillum veniam labore. Duis incididunt reprehenderit pariatur reprehenderit do mollit pariatur consectetur cillum excepteur proident Lorem. In occaecat cupidatat officia ea id exercitation irure aute ea.\r\n","registered":"2015-01-29T03:57:39 -06:-30"},{"_id":"56f22f5ced534c1774a53307","balance":3779.49,"picture":"http://placehold.it/32x32","age":29,"eyeColor":"blue","name":"Alyssa Lancaster","gender":"female","company":"INSOURCE","email":"alyssalancaster@insource.com","phone":"+1 (870) 523-3158","address":"391 Lefferts Avenue, Gorst, Oregon, 4099","about":"Aute tempor in veniam id. Aliqua duis Lorem in fugiat dolore incididunt voluptate. Incididunt non culpa in proident veniam amet sint excepteur nisi. Ex laboris dolore consequat labore id amet non id. Veniam incididunt culpa Lorem enim voluptate. Sint elit mollit culpa in. Magna excepteur voluptate minim laboris est labore id ea veniam culpa velit et adipisicing.\r\n","registered":"2014-07-14T01:15:33 -06:-30"}];

        this._id = function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };

        //save method create a new employee if not already exists
        //else update the existing object
        this.save = function (employee) {
            var empDB = localStorage.getItem('empDB') ? JSON.parse(localStorage.getItem('empDB')) : employees;

            if (!employee._id) {
                //if this is new employee, add it in employees array
                employee._id = this._id();
                empDB.push(employee);
            } else {
                //For existing employee, find this employee using id
                //and update it.
                for (i in empDB) {
                    if (empDB[i]._id == employee._id) {
                        $log.log("in update", employee);
                        empDB[i] = employee;
                    }
                }
            }
            localStorage.setItem('empDB',JSON.stringify(empDB));
        };

        //simply search employees list for given id
        //and returns the employee object if found
        this.get = function (id) {
            var empDB = localStorage.getItem('empDB') ? JSON.parse(localStorage.getItem('empDB')) : employees;
            for (i in empDB) {
                if (empDB[i]._id == id) {
                    return empDB[i];
                }
            }
        };

        //iterate through employees list and delete
        //employee if found
        this.remove = function (id) {
            var employeeExist = false;
            var empDB = localStorage.getItem('empDB') ? JSON.parse(localStorage.getItem('empDB')) : employees;
            var deferred = $q.defer();

            for (i in empDB) {
                if (empDB[i]._id == id) {
                    empDB.splice(i, 1);
                    employeeExist = true;
                    break;
                }
            }

            if(employeeExist)
                deferred.resolve(true);
            else
                deferred.resolve(false);

            localStorage.setItem('empDB',JSON.stringify(empDB));
            return deferred.promise;
        };

        //simply returns the employees list
        this.list = function () {
            if(!localStorage.getItem('empDB')){
                localStorage.setItem('empDB',JSON.stringify(employees));
                return employees;
            }else{
                return JSON.parse(localStorage.getItem('empDB'));
            }
        };        

        return this;

    }

})();
