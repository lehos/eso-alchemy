$(function() {
    var dom = {
        body: $('body'),
        reagents: $('.reagents'),
        filterOptions: $('.filter-options'),
        clearFilter: $('.js-clear-filter')
    }

    var classes = {
        bodyFiltered: 'filtered-mode',
        bodyHideOthers: 'hide-others',
        effect: 'effect',
        effectName: 'effect-name',
        effectFiltered: 'effect-filtered',
        reagentFiltered: 'reagent-filtered',
        hidden: 'hidden',
    }

    function activateFilterUi() {
        dom.body.addClass(classes.bodyFiltered)
        dom.filterOptions.removeClass(classes.hidden)
        dom.clearFilter.show()
    }

    function deactivateFilterUi() {
        dom.body.removeClass(classes.bodyFiltered)        
        dom.filterOptions.addClass(classes.hidden)
        dom.clearFilter.hide()
    }

    function applyFilter(name) {
        $('.' + classes.effect).each(function() {
            var me = $(this)
            if (me.find('.' + classes.effectName).text() == name) {
                $(this).addClass(classes.effectFiltered)
                if (me.is('td')) {
                    me.parent().addClass(classes.reagentFiltered)
                }
            }
        })
    }

    function clearFilteredItems() {
        $('.' + classes.reagentFiltered).removeClass(classes.reagentFiltered)
        $('.' + classes.effectFiltered).removeClass(classes.effectFiltered)
    }

    $('.' + classes.effect).click(function() {
        if ($(this).hasClass(classes.effectFiltered)) {
            clearFilter()
            return
        }

        activateFilterUi()
        clearFilteredItems()
        
        var name = $(this).children('.' + classes.effectName).text()
        applyFilter(name)
    })    

    dom.clearFilter.click(function() {
        clearFilteredItems()
        deactivateFilterUi()
    })

    $('.js-hide-others').change(function() {
        dom.body.toggleClass(classes.bodyHideOthers)
    })

    // concrete columns width
    dom.reagents.width(dom.reagents.width())
    dom.reagents.find('.head th').each(function() {
        $(this).width($(this).width())
    })
})