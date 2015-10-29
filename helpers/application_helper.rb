module ApplicationHelper
  def pretty_date(date)
    date.strftime('%B %d, %Y')
  end
  def show_contacts(contacts, classnames)
    partial 'layouts/social', locals: { contacts: contacts, classnames: classnames }
  end
end
