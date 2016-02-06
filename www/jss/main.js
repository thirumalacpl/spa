;(function($)
{

     $(document).ready(function()
     {
        //alert('main');
        var options =
        {
            formId: 'myPaypalButton',
            itemName: 'Buy a T-Shirt',
            email: 'naren@advicesync-consulting.com',
            basePrice: 59.00,
            options:
            {
                sizes:
                {
                    name: 'Please select your size:',
                    type: 'select',
                    values:
                    {
                        'Size - Small' : 10.00,
                        'Size - Medium'   : 69.00,
                        'Size - Large'   : 79.99,
                        'Size - Extra Large'   : 89.00,
                        'Size - Too Big'   : 199.95
                    }
                }

            },
            countryCode: 'au',  //au, uk
            currencySymbol: '$',
            currencyCode: 'AUD'
        };

        $('#demo1').paypalBuyButton(options);

     });

})(jQuery);