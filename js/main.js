$(function() {
    var dom = {
        body: $('body'),
        reagents: $('.reagents'),
        filterOptions: $('.filter-options'),
        clearFilter: $('.js-clear-filter')
    }

    $('.effect').click(function() {
        if ($(this).hasClass('effect-filtered')) {
            clearFilter()
            return
        }

        dom.body.addClass('filtered-mode')
        dom.filterOptions.removeClass('hidden')
        dom.clearFilter.show()
        $('.reagent-filtered').removeClass('reagent-filtered')
        $('.effect-filtered').removeClass('effect-filtered')

        var name = $(this).find('.effect-name').text()
        $('.effect').each(function() {
            var me = $(this)
            if (me.find('.effect-name').text() == name) {
                $(this).addClass('effect-filtered')
                if (me.is('td')) {
                    me.parent().addClass('reagent-filtered')
                }
            }
        })
    })

    function clearFilter() {
        dom.body.removeClass('filtered-mode')
        $('.reagent-filtered').removeClass('reagent-filtered')
        $('.effect-filtered').removeClass('effect-filtered')
        dom.filterOptions.addClass('hidden')
        dom.clearFilter.hide()
    }

    dom.clearFilter.click(function() {
        clearFilter()
    })

    $('.js-hide-others').change(function() {
        dom.body.toggleClass('hide-others')
    })

    // concrete columns width
    dom.reagents.width(dom.reagents.width())
    dom.reagents.find('.head th').each(function() {
        $(this).width($(this).width())
    })
})